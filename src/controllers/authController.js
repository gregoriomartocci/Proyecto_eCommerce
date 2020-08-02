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
            res.cookie("remember-me", user.email, { maxAge: 99999 });
          }

          req.session.usuarioLogueado = req.body.email;

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
    req.session.destroy();
    return res.redirect("/user/login");
  },
};

/*


// devolveme el usuario que coincide con lo que viene del form
    let user = users.find((user) => {
      return user.email == req.body.email;
    });

if (user) {
  var result = bcrypt.compareSync(req.body.password, user.password);
} else {
  return res.render("login", { errors: [{ msg: "Usuario inexistente" }] });
}

if (result) {
  if (req.body.rememberme != undefined) {
    res.cookie("remember-me", user.email, { maxAge: 99999 });
  }

  req.session.usuarioLogueado = req.body.email;

  return res.redirect("/");
} else {
  return res.render("login", {
    errors: [{ msg: "Contraseña incorrecta" }],
  });
}


*/
