const { Router } = require('express');
const { subreddits } = require('../controllers');

const router = Router();

router.post('/create', subreddits.create);

module.exports = router;
