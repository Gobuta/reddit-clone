const { Router } = require('express');
const users = require('./users');
const posts = require('./posts');
const subreddits = require('./subreddits');

const router = Router();

router.use('/api/users', users);
router.use('/api/posts', posts);
router.use('/api/subreddits', subreddits);

module.exports = router;
