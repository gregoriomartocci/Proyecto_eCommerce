function cookieAuthMiddleware(req,res,next){

    let users = require("../data/users.json");

    next()

    if(req.cookies.rememberme != undefined && req.session.usuarioLogueado == undefined){

        for (let i = 0; i < users.length; i++) {
            
            if(user[i].email == req.cookies.rememberme){
                usuarioALoguearse = user[i]
                break
            }
        }

        console.log('Todo ok')
        req.session.usuarioLogueado = usuarioALoguearse
}
}

module.exports = cookieAuthMiddleware