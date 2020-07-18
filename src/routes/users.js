// ************ Require's ************
const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const controllers = require("../controllers");
const upload = require("../config/multer");
const registerValidation = require("../middlewares/registerValidation");
const avatarsController = require("../controllers/avatarsController");

// Log In

//router.get("/", controllers.auth.home);

router.get("/login", controllers.auth.showForm);
router.post("/login", controllers.auth.login);
router.get("/logout", controllers.auth.logout);

// Register

router.get("/register", controllers.users.create);
router.post(
  "/register",
  [upload.any("avatar"), registerValidation],
  controllers.users.store
);

// Avatar

router.get("/avatar", function (req, res) {
  res.render('avatar')
});

router.post("/avatar", upload.any(), function (req, res) {
  res.json(req.files)
});


// Probando Session
router.get("/", function (req, res) {
  res.send(req.session.usuarioLogueado);
  console.log(req.session.usuarioLogueado);
});

module.exports = router;
