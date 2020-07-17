// ************ Require's ************
var express = require("express");
var router = express.Router();
const usersController = require("../controllers/usersController");
const avatarController = require("../controllers/avatarController");
const path = require("path");
let { check } = require("express-validator");
let registerValidation = require("../middlewares/registerValidation")

var multer = require("multer");
const authController = require("../controllers/authController");

var storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${Date.now()}-${ext}`);
  },
});

var upload = multer({ storage });

router.get('/', authController.home)
router.get("/login", authController.showForm);
router.post("/login", authController.login);
router.get("/login", authController.logout);


/*

router.get("/login", usersController.login);

router.post(
  "/login",
  [
    check("email").isEmail().withMessage("Email Invalido"),
    check("password")
      .isLength({ min: 8 })
      .withMessage("La contrasenia debe tener al menos 8 caracteres"),
  ],
  usersController.processLogin
);

*/

router.get("/register", usersController.register);

router.post("/register", registerValidation, usersController.create);

//router.post("/register",upload.any(), usersController.store);


// Probando Session

router.get("/check", function (req, res) {
  req.session.usuarioLog = "prueba@hotmail.com";

  console.log(req.session);

  console.log(req.session.usuariolog);
});

module.exports = router;
