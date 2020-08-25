const bcrypt = require("bcrypt");
let { validationResult } = require("express-validator");

const path = require("path");
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

    db.User.findOne({
      where: {
        email: req.body.email,
      },
      
    }).then((user) => {
      if (!user) {
        if (req.body.password == req.body.confirm_password) {
          console.log("Usuario registrado con exito");
          const userData = {
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            //avatar: path.join("src","uploads","avatars",req.file.filename)
          };
          if (req.body.rememberme != undefined) {
            res.cookie("rememberMe", userData.email, { maxAge: 50000 });
          }
          
          db.User.create(userData);
          req.session.user = userData;
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
