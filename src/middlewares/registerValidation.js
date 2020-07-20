let { check } = require("express-validator");

module.exports = [
    check('email')
        .isEmail()
        .withMessage('Email invalido'),

    check('password')
        .isLength({min:3, max:9}).withMessage(' Passwords entre 3 y 9 caracteres')
]