const jwt = require('jsonwebtoken');
const database = require('../database');

const protect = async (req, res, next) => {
  const accessToken = req.header('Authorization');
  if (!accessToken) {
    return res.status(401).send({ msg: 'Access token is required' });
  }
  try {
    const decoded = await jwt.verify(accessToken, process.env.ACCESS_SECRET);
    if (!decoded) {
      return res.status(401).send({ msg: 'Invalid access token' });
    }
    const { user_id, tokenVersion } = decoded;
    const userArray = await database('users')
      .select()
      .where({ id: user_id, token_version: tokenVersion });
    if (!userArray.length) {
      return res.status(401).send({ msg: 'Invalid access token' });
    }
    req.user = userArray[0];
    next();
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  protect
};
