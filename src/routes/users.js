// ************ Require's ************
var express = require("express");
var router = express.Router();
const usersController = require("../controllers/usersController");
const avatarController = require("../controllers/avatarController")
const path = require('path')


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

router.get("/register", usersController.register);

router.post("/register",upload.any(), usersController.store);


module.exports = router;


















