const bcrypt = require('bcrypt');
const fs = require ('fs');
let {check, validationResult, body} = require('express-validator');


let usersController = {
    home: function (req, res) {
        res.send('Home');
     },
    
    showLoginForm: function (req, res) {
       res.render('login');
    },
    
    showRegisterForm: function (req, res) {
      res.render('register')
    },
    
    logout: function(req, res) {
        req.session.destroy(()=>
        res.redirect('/users/login'))
    },
   
    processLogin: function (req, res) {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let usersJSON = fs.readFileSync('../data/users.json');
            let users;
            if (usersJSON == " ") {
                users = [ ];
            } else {
                users = JSON.parse(usersJSON);
            }
        for (let i = 0; i <users.length; i++) {
            if (users[i].email == req.body.email) {
                if (bcrypt.compareSync(req.body.password, user))
                usuarioALoguearse = users[i];
                break;
            }
        }    }
       if (usuarioALoguearse == undefined) {
           return res.render('login', {errors: [
               {msg: 'Credenciales invalidas'}
           ]});
       }
    req.session.usuarioLogueado = usuarioALoguearse;
res.render('Se ha logueado exitosamente') 
    },


create: function (req, res) {
let newUser = {
    email: req.body.email,
    password: req.body.password,
}
res.send("Ha creado el usuario exitosamente")
},

}

module.exports = usersController;    