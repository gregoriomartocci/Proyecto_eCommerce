const bcrypt = require("bcrypt");
let { validationResult } = require("express-validator");
let users = require("../data/users.json");

// DB
const path = require("path");
dbDir = path.resolve("db", "models");
const db = require(dbDir);

module.exports = {
  show: function (req, res) {
    let = result = validationResult(req);
    if (result.isEmpty()) {
      res.render("login", { errors: result.errors });
    }
  },

  form: function (req, res) {
    let = result = validationResult(req);
    if (!result.isEmpty()) {
      res.render("login", { error: result.errors });
    }

    db.User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((user) => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          if (req.body.rememberme != undefined) {
            res.cookie("rememberMe", user.email, { maxAge: 9999 });
          }

          req.session.usuarioActual = req.body.email;

          return res.redirect("/");
        } else {
          return res.render("login", {
            errors: [{ msg: "Contraseña incorrecta" }],
          });
        }
      } else {
        return res.render("login", {
          errors: [{ msg: "Usuario Inexistente" }],
        });
      }
    });
  },

  logout: function (req, res) {
    res.clearCookie('rememberMe');
    req.session.destroy(() => {
      return res.redirect("/");
    });
  },
};
