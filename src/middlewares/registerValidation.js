let { check } = require("express-validator");

module.exports = [
    check('email').isEmail().withMessage('El campo email es invalido')
]