// ************ Require's ************
var express = require("express");
var router = express.Router();
const usersController = require("../controllers/usersController");
const avatarController = require("../controllers/avatarController")
const path = require('path')
let { check, validationResult, body } = require("express-validator");


var multer = require('multer');

var storage = multer.diskStorage({
  destination:(req,res,cb) => {
    cb(null,'./public/images')
  },
  filename:(req,file,cb) => {
    let ext = path.extname(file.originalname)
    cb(null, `${file.fieldname}-${Date.now()}-${ext}`)
  }
})

var upload = multer({storage})


let registerValidation = require('../middlewares/registerValidation')

router.get("/login", usersController.login);

router.post("/login",[
  check('email').isEmail().withMessage('Email Invalido'),
  check('password').isLength({min:8}).withMessage('La contrasenia debe tener al menos 8 caracteres')
], usersController.processLogin);

router.get("/register", usersController.register);

router.post("/register", usersController.createUser);

//router.post("/register",upload.any(), usersController.store);




router.get('/check',function(req,res){

  req.session.usuarioLog = "prueba@hotmail.com"

  console.log(req.session)

  console.log(req.session.usuariolog)

})

module.exports = router