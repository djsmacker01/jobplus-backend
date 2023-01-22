const router = require('express-promise-router')();
const authControllers = require('../controllers/auth.controllers');

router.post('/login', authControllers.login);

module.exports = router;