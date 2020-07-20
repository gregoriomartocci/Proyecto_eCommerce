const bcrypt = require("bcrypt");
const fs = require("fs");
let { validationResult } = require("express-validator");
let users = require("../data/users.json");

module.exports = {
  // Create

  create: function (req, res) {
    return res.render("register");
  },

  // Store

  store: function (req, res) {
    let = result = validationResult(req);

    if (!result.isEmpty()) {
      return res.render("register", { errors: result.errors });
    }

    //Validacion imagen
    if (req.fileValidationError) {
      return res.render("register", {
        errors: [{ msg: req.fileValidationError }],
      });
    }

    let userExists = users.find((user) => user.email == req.body.email);

    if (userExists) {
      return res.render("register", { errors: [{ msg: "Usuario existente" }] });
    } else if (req.body.password == req.body.confirm_password) {
      let user = {
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        confirm_password: bcrypt.hashSync(req.body.password, 10),
        avatar: req.files,
      };

      req.session.usuarioLogueado = user.email;

      if(req.body.rememberme != undefined){
        res.cookie('remember-me',
        user.email, { maxAge: 99999}
        )
      }

      users.push(user);
      usersJSON = JSON.stringify(users);
      fs.writeFileSync("src/data/users.json", usersJSON);
      return res.redirect("/");
    } else {
      return res.render("register", {
        errors: [{ msg: "Contraseñas inconsistentes" }],
      });
    }
  },
};
