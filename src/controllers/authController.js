const bcrypt = require("bcrypt");
let { validationResult } = require("express-validator");
let users = require("../data/users.json");

module.exports = {

  home: function (req, res, next) {
    res.render("/", {
      user: req.session.usuarioLogueado,
    });
  },

  showForm: function (req, res) {
    res.render("login");
  },

  login: function (req, res) {
    let = result = validationResult(req);

    if (!result.isEmpty()) {
      res.render("login"),
        {
          errors: result.errors,
          data: req.body,
        };
    }

    let user = users.find((user) => {
      return user.email == req.body.email; // devolveme el usuario que coincide con lo que viene del form
    });

    if (user) {
      var result = bcrypt.compareSync(req.body.password, user.password);

      if (result) {
        req.session.usuarioLogueado = req.body.email;
        res.redirect("/");
      } else {
        res.render("login", { errors: [{ msg: "Contraseña incorrecta" }] });
      }
    } else {
      res.render("login", { errors: [{ msg: "Usuario Inexistente" }] });
    }
  },

  logout: function (req, res) {
    req.session.destroy(() => {
      res.redirect("/users/login");
    });
  },
};
