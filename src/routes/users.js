// ************ Require's ************
const express = require("express");
const router = express.Router();
const { check, validationResult, body } = require("express-validator");
const registerValidation = require("../middlewares/registerValidation");
const loginValidation = require("../middlewares/loginValidation");
const controllers = require("../controllers");
const upload = require("../config/multer");
const usuariosMiddlewares = require("../middlewares/usuariosMiddlewares");
const invitadosMiddlewares = require("../middlewares/invitadosMiddlewares");

// Log In

//router.get("/", controllers.auth.home);

router.get("/login", invitadosMiddlewares, controllers.auth.show);
router.post("/login", loginValidation, controllers.auth.form);
router.get("/logout", usuariosMiddlewares, controllers.auth.logout);

// Register
let fileValidation = function (req, res, next) {
  let allowed = ["image/png", "image/gif", "image/jpg", "image/jpeg"]
  if(req.file) {
  if (!allowed.includes(req.file.mimetype)) {
    res.status(422).end("Format not allowed");
  } 
  }
  next()
};

router.get("/register", invitadosMiddlewares, controllers.users.create);
router.post(
  "/register",
  [upload.single("avatar"), registerValidation, fileValidation],
  controllers.users.store
);
//Avatar


router.post(
  "/avatar",
  [upload.any("avatar"), fileValidation],
  controllers.avatars.store
);

module.exports = router;
