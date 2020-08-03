const bcrypt = require("bcrypt");
let { validationResult } = require("express-validator");

const path = require("path");
const { users } = require(".");
dbDir = path.resolve("db", "models");
const db = require(dbDir);

module.exports = {
  // Create

  create: function (req, res) {
    let = result = validationResult(req);
    if (result.isEmpty()) {
      res.render("register", { errors: result.errors });
    }
  },

  // Store
  store: function (req, res) {
    let = result = validationResult(req);
    if (!result.isEmpty()) {
      res.render("register", { errors: result.errors });
    }

    db.User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((user) => {
      if (!user) {
        if (req.body.password == req.body.confirm_password) {
          console.log("Usuario registrado con exito");
          const userData = {
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            //avatar: req.files,
          };
          if (req.body.rememberme != undefined) {
            res.cookie("remember-me", userData.email, { maxAge: 5000 });
          }

          db.User.create(userData);
          req.session.usuarioActual = userData.email;
          return res.redirect("/");
        } else {
          return res.render("register", {
            errors: [{ msg: "Contraseñas inconsistentes" }],
          });
        }
      } else {
        return res.render("register", {
          errors: [{ msg: "Usuario existente" }],
        });
      }
    });
  },
};
