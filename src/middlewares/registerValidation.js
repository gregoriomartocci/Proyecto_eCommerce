const fs = require("fs");
const path = require("path");
var bcrypt = require("bcrypt");
var multer = require("multer");
var { check, validationResult, body } = require("express-validator");

const usersFilePath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

// const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {

    check('email').isEmail().withMessage('El campo email es invalido'),
}

module.exports = controller;
