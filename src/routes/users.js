// ************ Require's ************
var express = require("express");
var router = express.Router();
const userController = require("../controllers/userController");
const avatarController = require("../controllers/avatarController")

let registerValidation = require('../middlewares/registerValidation')

router.get("/login", userController.login);

router.get("/register", userController.showRegister);

router.post("/register", userController.submit);

module.exports = router;

/*
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
*/

module.exports = router;