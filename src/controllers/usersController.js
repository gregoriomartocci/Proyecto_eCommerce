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

  // Login

  processLogin: function (req, res) {
    let existsUser = users.find((user) => user.email == req.body.email);
    if (existsUser) {

      for (let i = 0; i < users.length; i++) {

        var result = bcrypt.compareSync(req.body.password, users[i].password);

        if (result) {
          console.log("Password correct");
          req.session.usuarioLogueado = req.body.email;
          res.redirect("/");
        } else {
          res.render("login", { errors: [{ msg: "Contraseña incorrecta" }] });
        }
      }
    } else {
      res.render("login", { errors: [{ msg: "Usuario Inexistente" }] });
    }
  },

  // Create

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
