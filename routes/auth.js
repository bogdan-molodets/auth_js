const express = require('express');
const router = express.Router();

const controller = require('../controllers/authController')

/* GET home page. */

router.post('/login', controller.login);

router.get('/logout', controller.logout);

router.get('/', controller.index);

module.exports = router;