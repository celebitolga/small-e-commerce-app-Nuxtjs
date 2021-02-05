const express = require('express');
const router = express.Router();

const accountController = require('../controllers/account');

router.post('/login', accountController.postLogin);

router.post('/register', accountController.postRegister);

router.post('/reset-password', accountController.postResetPassword);

module.exports = router;