const bcrypt = require("bcrypt");
const fs = require("fs");
let { check, validationResult, body } = require("express-validator");
let users = require("../data/users.json");

let usersController = {
  register: function (req, res) {
    return res.render("register");
  },

  login: function (req, res) {
    return res.render("login");
  },

  processLogin: function (req, res) {
    let errors = validationResult;

    if (errors.isEmpty()) {
      let usersJSON = fs.readFileSync("src/data/users.json", { encoding: "utf8" });
      let users;
      if (usersJSON == "") {
        users = [];
      } else {
        users = JSON.parse(usersJSON);
      }

      for (let i = 0; i < users.length; i++) {
        if (users[i].email == req.body.email) {
          if (bcrypt.compareSync(req.body.password, users[i].password)) {
            let usuarioALoguearse = users[i];
            break;
          }
        }
      }

      if (usuarioALoguearse == undefined) {
        return res.render("login", {
          errors: [{ msg: "Credenciales Invalidas" }],
        });
      }

      req.session.usuarioLogueado = usuarioALoguearse;
    } else {
      return res.render("login", { errors: errors.errors });
    }
  },

  createUser: function (req, res) {
    let existsUser = users.find((user) => user.email == req.body.email);
    if (existsUser) {
      return res.render("register", { errors: [{ msg: "Usuario existente" }] });
    } else if (req.body.password == req.body.confirm_password) {
      let newUser = {
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        confirm_password: bcrypt.hashSync(req.body.confirm_password, 10),
      };
      users.push(newUser);
      usersJSON = JSON.stringify(users);
      fs.writeFileSync("src/data/users.json", usersJSON);
      req.session.usuarioLogueado = newUser.email;
      return res.redirect("/");
    } else {
      return res.render("register", {
        errors: [{ msg: "Contraseñas inconsistentes" }],
      });
    }
  },
};

module.exports = usersController;
