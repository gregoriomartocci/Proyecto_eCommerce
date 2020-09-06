const { check }  = require("express-validator");

module.exports = [
    check('nombre')
    .isLength({min:5})
    .withMessage('El nombre del producto debe ser al menos de 5 caracteres'),

    check('marca')
    .isLength({min:1})
    .withMessage('Debe completar la marca'),

    check('modelo')
    .isLength({min:2})
    .withMessage('Debe completar el modelo'),

    check('precio')
    .isInt({min:0, max:1000000})
    .withMessage('Debe indicar el precio'),

    check('description')
        .isLength({min:20, max:300}).withMessage('La descripcion del producto debe tener al menos 20 caracteres'),

]