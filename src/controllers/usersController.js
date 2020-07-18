const bcrypt = require("bcrypt");
const fs = require("fs");
let { validationResult } = require("express-validator");
let users = require("../data/users.json");

let usersController = {
  // Create

  create: function (req, res) {
    return res.render("register");
  },

  // Store

  store: function (req, res) {
    let result = validationResult(req);

    if (!result) {
      return res.render("register", { result: errors, data: req.body });
    }

    let userExists = users.find((user) => user.email == req.body.email);

    if (userExists) {
      res.render("register", { errors: [{ msg: "Usuario existente" }] });
    } else if (req.body.password == req.body.confirm_password) {
      let user = {
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        confirm_password: bcrypt.hashSync(req.body.confirm_password, 10),
        avatar: req.files,
      };

      req.session.usuarioLogueado = user.email;
      users.push(user);
      usersJSON = JSON.stringify(users);
      fs.writeFileSync("src/data/users.json", usersJSON);
      return res.redirect("/");
    } else {
      res.render("register", {
        errors: [{ msg: "Contraseñas inconsistentes" }],
      });
    }
  },
};

module.exports = usersController;
