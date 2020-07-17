let { check } = require("express-validator");

module.exports = [
    check('email')
        .isEmail()
        .withMessage('El campo email es invalido'),

    check('password')
        .isLength({min:6, max:9}).withMessage(' El passwords debe ser entre 6 y 9 caracteres')
]