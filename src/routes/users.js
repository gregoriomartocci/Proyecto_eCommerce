// ************ Require's ************
const express = require("express");
const router = express.Router();
const path = require("path");
const { check } = require("express-validator");
const registerValidation = require("../middlewares/registerValidation");
const controllers = require('../controllers')
const upload = require("../config/multer");

// Log In

//router.get("/", controllers.auth.home);

router.get("/login", controllers.auth.showForm);
router.post("/login", controllers.auth.login);
router.get("/login", controllers.auth.logout);

// Register

router.get("/register", controllers.users.create);
router.post("/register", controllers.users.store);
//router.post("/register", upload, usersController.store);

// Probando Session

module.exports = router;