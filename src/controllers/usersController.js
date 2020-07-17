const bcrypt = require("bcrypt");
const fs = require("fs");
let { validationResult } = require("express-validator");
let users = require("../data/users.json");


let usersController = {

  register: function (req, res) {
    return res.render("register");
  },

  // Create

  create: function (req, res) {
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
