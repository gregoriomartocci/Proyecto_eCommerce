// ************ Require's ************
const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const controllers = require("../controllers");
const upload = require("../config/multer");
<<<<<<< HEAD
const registerValidation = require("../middlewares/registerValidation");
const avatarsController = require("../controllers/avatarsController");
=======
const usuariosMiddlewares = require("../middlewares/usuariosMiddlewares");
const invitadosMiddlewares = require("../middlewares/invitadosMiddlewares");
>>>>>>> 57effffb2885a9714fd2aa903b24e50b20672d1b

// Log In

//router.get("/", controllers.auth.home);

router.get("/login", invitadosMiddlewares ,controllers.auth.showForm);
router.post("/login", registerValidation , controllers.auth.login);
router.get("/logout", usuariosMiddlewares , controllers.auth.logout);

// Register

<<<<<<< HEAD
router.get("/register", controllers.users.create);
router.post(
  "/register",
  [upload.any("avatar"), registerValidation],
  controllers.users.store
);
=======
router.get("/register", invitadosMiddlewares , controllers.users.create);
router.post("/register", registerValidation , controllers.users.store);
//router.post("/register", upload, usersController.store);
>>>>>>> 57effffb2885a9714fd2aa903b24e50b20672d1b

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
