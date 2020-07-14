// ************ Require's ************
var express = require("express");
var router = express.Router();
const userController = require("../controllers/usersController");
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

router.get("/login", userController.login);
router.post("/login", userController.postLogin);
router.get("/register", userController.register);
router.post("/register",upload.any(), userController.store);

module.exports = router;


















