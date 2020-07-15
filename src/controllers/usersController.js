const bcrypt = require('bcrypt');
const fs = require ('fs');
let {check, validationResult, body} = require('express-validator');
let users = require('../data/users.json');


let usersController = {
    register: function (req, res) {
        return res.render('register')
    },
    login: function (req, res) {
        return res.render('login');
    },
    processLogin: function (req, res) {
        let errors = validationResult(req);
        res.redirect("/")
    },
    postLogin: function(req,res){
        let chequeo = users.find(user => (user.email == req.body.email) && (user.password = req.body.password))
        chequeo ? res.send("Existe el usuario " + chequeo.email ) : res.send("No existe el usuario")
    },
    create: function(req, res) {
    let usuario = {
        email: req.body.email,
        password: req.body.password,
    }
    res.redirect("/");
    },
    store: function(req,res) {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let usersJSON = fs.readFileSync('users.json')
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
               {msg: 'Credenciales invaldias'}
           ]});
       }
        req.session.usuarioLogueado = usuarioALoguearse;
        res.render('Se ha logueado exitosamente') 
    },
    createUser: function(req,res){
        let existsUser = users.find(user => (user.email == req.body.email))
        if(existsUser){
            return res.render("register", {errors: [{msg:"Usuario existente"}]})
        } else if(req.body.password == req.body.confirm_password){
            let newUser = {
                email: req.body.email, 
                password: req.body.password
            };
            users.push(newUser);
            usersJSON = JSON.stringify(users);
            fs.writeFileSync("src/data/users.json", usersJSON);
            req.session.usuarioLogueado = newUser.email;
            return res.redirect("/")
            }else {
                return res.render("register", {errors: [{msg:"Contraseñas inconsistentes"}]})
            }
    }
}

module.exports = usersController;
