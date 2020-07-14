const fs = require("fs");
const path = require("path");
var bcrypt = require("bcrypt");
var multer = require("multer");
var { check, validationResult, body } = require("express-validator");

const usersFilePath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

// const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  login: (req, res) => {
    res.render("login");
  },

  showRegister: (req, res) => {
    res.render("register");
  },

  submit: (req, res) => {
    let result = validationResult(req);

    if (!result.isEmpty()) {
      //console.log(req.files);

      let encripted = bcrypt.hashSync(req.body.password, 10);

      users = JSON.parse(users);

      let user = {
        ...req.body,
        id: users[users.length - 1].id + 1,
        password: encripted,
        confirm_password: encripted,

        //avatar: req.files[0].path.replace("public", ""),
      };

      users.push(user);

      users = JSON.stringify(users);
      fs.writeFileSync("./data/users.json", users);
      res.render("/");
    }

    res.render("/");
  },
};

module.exports = controller;
