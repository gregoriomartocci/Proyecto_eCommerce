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

    const userData = {
      email: req.body.email,
      pasword: bcrypt.hashSync(req.body.password, 10),
      //avatar: req.files,
    };

    db.User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((user) => {
      if (!user) {
        if (req.body.password == req.body.confirm_password) {
          console.log("Usuario registrado con exito");
          if (req.body.rememberme != undefined) {
            res.cookie("remember-me", userData.email, { maxAge: 5000 });
          }
          db.User.create(userData).then();
          req.session.usuarioLogueado = userData.email;
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
