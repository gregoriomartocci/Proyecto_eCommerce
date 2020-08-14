const { check, validationResult, body }  = require("express-validator");

module.exports = [
    check('nombre')
    .isLength({min:5, max:15})
    .withMessage('El producto debe tener un nombre correcto'),

    check('precio')
    .isInt({min:0, max:1000000})
    .withMessage('Debe indicar el precio'),

    check('descripcionProducto')
        .isLength({min:20, max:300}).withMessage('La descripcion del producto debe tener al menos 20 caracteres'),

]