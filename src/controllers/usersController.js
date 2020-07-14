const bcrypt = require("bcrypt");
const fs = require("fs");
let { check, validationResult, body } = require("express-validator");

let usersController = {
  register: function (req, res) {
    return res.render("register");
  },
  login: function (req, res) {
    return res.render("login");
  },
  processLogin: function (req, res) {
    let errors = validationResult(req);
    res.redirect("/");
  },

  create: function (req, res) {
    let usuario = {
      email: req.body.email,
      password: req.body.password,
    };
    res.redirect("/");
  },

  store: function (req, res) {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      let usersJSON = fs.readFileSync("users.json");
      let users;
      if (usersJSON == " ") {
        users = [];
      } else {
        users = JSON.parse(usersJSON);
      }
      for (let i = 0; i < users.length; i++) {
        if (users[i].email == req.body.email) {
          if (bcrypt.compareSync(req.body.password, user))
            usuarioALoguearse = users[i];
          break;
        }
      }
    }
    if (usuarioALoguearse == undefined) {
      return res.render("login", {
        errors: [{ msg: "Credenciales invaldias" }],
      });
    }
    req.session.usuarioLogueado = usuarioALoguearse;
    res.render("Se ha logueado exitosamente");
  },
};

module.exports = usersController;
