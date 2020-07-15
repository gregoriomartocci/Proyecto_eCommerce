// ************ Require's ************
var express = require("express");
var router = express.Router();
var {check, validationResult} = require('express-validator');
var users = require ('../data/users.json');
const multer = require('multer');
//const upload = require('../config/multer');
// var authMiddleware = require('../middlewares/auth');



// ************ Controller Require ************
const userController = require("../controllers/usersController");

router.get('/', userController.home);

router.get('/login', userController.showLoginForm);

router.get('/register', userController.showRegisterForm);

router.get('/logout', userController.logout);

router.post('/login', userController.processLogin);

router.post('/register', userController.create);


module.exports = router;
