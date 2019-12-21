const { Router } = require('express');
const { posts } = require('../controllers');

const router = Router();

router.post('/create', posts.create);

module.exports = router;
