const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const database = require('../database');
const createToken = require('../utilities/createToken');

const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userNameArray = await database('users')
      .select()
      .where({ name });
    const userEmailArray = await database('users')
      .select()
      .where({ email });
    const nameTaken = userNameArray.length > 0;
    const emailTaken = userEmailArray.length > 0;
    const errors = {};
    if (nameTaken) {
      errors.name = 'Name is already taken';
    }
    if (emailTaken) {
      errors.email = 'E-mail is already taken';
    }
    if (Object.keys(errors).length > 0) {
      return res.status(409).send(errors);
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await database('users').insert(
      { name, email, password: hashedPassword },
      '*'
    );
    return res.status(201).send(newUser);
  } catch (e) {
    console.error(e);
  }
};

const login = async (req, res) => {
  const { name, password } = req.body;
  const error = { msg: 'Invalid name or password' };
  try {
    const userArray = await database('users')
      .select()
      .where({ name });
    if (!userArray.length) {
      return res.status(403).send(error);
    }
    const user = userArray[0];
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(403).send(error);
    }
    const accessToken = await createToken(
      { user_id: user.id, tokenVersion: user.token_version },
      process.env.ACCESS_SECRET,
      process.env.ACCESS_DURATION
    );
    const refreshToken = await createToken(
      { user_id: user.id, tokenVersion: user.token_version },
      process.env.REFRESH_SECRET,
      process.env.REFRESH_DURATION
    );
    res.cookie('rt', refreshToken, {
      httpOnly: true,
      maxAge: parseInt(process.env.REFRESH_DURATION),
      sameSite: true
    });
    const { password: pw, ...rest } = user;
    return res.send({ accessToken, user: rest });
  } catch (e) {
    console.error(e);
  }
};

const logout = (_, res) => {
  res.clearCookie('rt');
  res.end();
};

const refreshToken = async (req, res) => {
  const { rt } = req.cookies;
  if (!rt) {
    return res.status(401).send({ msg: 'Refresh token is required' });
  }
  try {
    const decoded = await jwt.verify(rt, process.env.REFRESH_SECRET);
    if (!decoded) {
      return res.status(401).send({ msg: 'Invalid refresh token' });
    }
    const accessToken = await createToken(
      { user_id: user.id, tokenVersion: user.token_version },
      process.env.ACCESS_SECRET,
      process.env.ACCESS_DURATION
    );
    return res.send({ accessToken });
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  register,
  login,
  logout,
  refreshToken
};
