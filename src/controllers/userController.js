const fs = require("fs");
const path = require("path");
var bcrypt = require("bcrypt");
var { check, validationResult, body } = require("express-validator");


const usersFilePath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

// const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  login: (req, res) => {
    res.render("login");
  },

  showRegister: (req, res) => {
    res.render("registerPrueba");
  },

  submit: (req, res) => {
    let encripted = bcrypt.hashSync(req.body.password, 10);
    users = JSON.parse(users);

    // delete req.body.password_confirmation SI QUEREMOS BORRAR UN PARAMETRO

    console.log(req.body.email)

    let user = {
      ...req.body,
      id:users[users.length-1].id+1,
      password: encripted,

      // LA RUTA QUE VA A USAR EL USUARIO NO ES CON
      // PUBLIC ADELANTE ENTONCES TENGO QUE HACER REPLACE
      // QUE ES UN METODO DE STRING

      avatar: req.files[0].path.replace("public", ""),
    };

    users.push(user);

    // leo de la variable users para parsear

    // ahora bien,  como tengo un array puedo hacer un push
    // le puedo agregar el usuario que estoy recibiendo atraves del
    // body, esta modificacion se hace en la memoria del script
    // pero NO SE ESTA GUARDANDO EN EL ARCHIVO ASI QUE TENGO QUE
    // HACER ESTO:

    console.log(user);

    users = JSON.stringify(users);
    fs.writeFileSync("./data/users.json", users);
    res.render("profile", { user });
  },
};

module.exports = controller;
