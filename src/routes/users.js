// ************ Require's ************
const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const registerValidation = require("../middlewares/registerValidation");
const controllers = require('../controllers')
const upload = require("../config/multer");

// Log In

//router.get("/", controllers.auth.home);

router.get("/login", controllers.auth.showForm);
router.post("/login", controllers.auth.login);
router.get("/logout", controllers.auth.logout);

// Register

router.get("/register", controllers.users.create);
router.post("/register", registerValidation, controllers.users.store);
//router.post("/register", upload, usersController.store);

// Probando Session

router.get('/', function(req,res){

      console.log(req.session.usuarioLogueado)

})

module.exports = router;