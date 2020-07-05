var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Codigo agregado por Baltasar */
var usersController = require('../Controllers/usersController');
let {check, validationResult, body} = require('express-validator');

router.get('/login', usersController.login);
router.get('/register', usersController.register);

router.post('/login', [
  check('email').isEmail().withMessage('Email invalido'),
  check('password').isLength({min: 8}).withMessage('El password es invalido')
], usersController.processLogin);

router.post('/register', usersController.create);

module.exports = router;
