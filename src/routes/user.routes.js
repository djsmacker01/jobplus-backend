const router = require('express-promise-router')();
const userController = require('../controllers/user.controllers');

router.post('/users', userController.createUser)
// router.get('/', userController.getUsers);

module.exports = router;
