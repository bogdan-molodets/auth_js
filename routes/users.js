var express = require('express');
var router = express.Router();

const authController = require('../controllers/authController.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', {congratulation:'Hello, champ!', game_name: 'Cube game'})
});
router.get('/logout', authController.logout);
module.exports = router;
