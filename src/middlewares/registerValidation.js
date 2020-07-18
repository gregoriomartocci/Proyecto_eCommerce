let { check } = require("express-validator");

module.exports = [

    check('email')
        .isEmail()
        .withMessage('Email invalido'),

    check('password')
<<<<<<< HEAD
        .isLength({min:6, max:9})
        .withMessage(' El passwords debe ser entre 6 y 9 caracteres'),
    
=======
        .isLength({min:3, max:9}).withMessage(' Passwords entre 3 y 9 caracteres')
>>>>>>> 57effffb2885a9714fd2aa903b24e50b20672d1b
]