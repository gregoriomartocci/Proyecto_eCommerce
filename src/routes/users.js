// ************ Require's ************
var express = require("express");
var router = express.Router();
const userController = require("../controllers/userController");
const avatarController = require("../controllers/avatarController")

let registerValidation =require('../middlewares/registerValidation')



router.get("/login", userController.create);

router.get("/register", userController.store);

module.exports = router;
