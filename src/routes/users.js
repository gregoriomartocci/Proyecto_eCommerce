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
router.get("/register", invitadosMiddlewares, controllers.users.create);
router.post(
  "/register",
  [upload.any(), registerValidation],
  controllers.users.store
);
//Avatar
let fileValidation = function (req, res, next) {
  let allowed = [image/png, image/jpg, image/gif, image/jpeg]

  if(allowed.includes(req.file.mimetype)){
      next()
  } else {
      return res.status(422).end('Format not allowed')
  }
}

router.post("/avatar", [upload.any(avatar), fileValidation], controllers.avatars.store);

let fileValidation = function (req, res, next) {
    let allowed = [image/png, image/jpg, image/gif, image/jpeg]

    if(allowed.includes(req.file.mimetype)){
        next()
    } else {
        return res.status(422).end('Format not allowed')
    }
}



module.exports = router;
