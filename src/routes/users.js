// ************ Require's ************
const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const registerValidation = require("../middlewares/registerValidation");
const controllers = require("../controllers");
const upload = require("../config/multer");
const usuariosMiddlewares = require("../middlewares/usuariosMiddlewares");
const invitadosMiddlewares = require("../middlewares/invitadosMiddlewares");

// Log In

//router.get("/", controllers.auth.home);

router.get("/login", invitadosMiddlewares, controllers.auth.showForm);
router.post("/login", registerValidation, controllers.auth.login);
router.get("/logout", usuariosMiddlewares, controllers.auth.logout);

// Register
router.get("/register", invitadosMiddlewares, controllers.users.create);
router.post("/register", [upload.any() ,registerValidation], controllers.users.store);


router.post("/avatar", upload.any() , controllers.avatars.store)
// Probando Session

router.get("/", function (req, res) {
  console.log(req.session.usuarioLogueado);
});

module.exports = router;
