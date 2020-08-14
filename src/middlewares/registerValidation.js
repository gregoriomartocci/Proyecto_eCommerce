let { check } = require("express-validator");

module.exports = [
    check('name')
    .isLength({min:2, max:15})
    .withMessage('Debe completar el Nombre'),

    check('lastname')
    .isLength({min:2, max:15})
    .withMessage('Debe completar el Apellido'),

    check('email')
        .isEmail()
        .withMessage('Email invalido'),

    check('password')
        .isLength({min:8, max:15}).withMessage('El password debe tener entre 8 y 15 caracteres'),

]