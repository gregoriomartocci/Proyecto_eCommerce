let { check } = require("express-validator");

module.exports = [
    check('email')
        .isEmail()
        .withMessage('Email invalido'),

    check('password')
        .isLength({min:8}).withMessage('El password debe tener 8 caracteres'),

]