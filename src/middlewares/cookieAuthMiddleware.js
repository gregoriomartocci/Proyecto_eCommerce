function cookieAuthMiddleware(req,res,next){

    let users = require("../data/users.json");

    
    if(req.cookies.rememberme != undefined && req.session.usuarioLogueado == undefined){
        
        for (let i = 0; i < users.length; i++) {
            
            if(user[i].email == req.cookies.rememberme){
                usuarioALoguearse = user[i]
                break
            }
        }
        
        req.session.usuarioLogueado = usuarioALoguearse
    }
    next()
}

module.exports = cookieAuthMiddleware