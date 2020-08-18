let { check } = require("express-validator");

module.exports = [
    check('nombre')
    .isLength({min:2})
    .withMessage('Debe completar el Nombre'),

    check('apellido')
    .isLength({min:2})
    .withMessage('Debe completar el Apellido'),

    check('email')
        .isEmail()
        .withMessage('Email invalido'),

    check('password')
        .isLength({min:8}).withMessage('El password debe tener 8 caracteres'),

]