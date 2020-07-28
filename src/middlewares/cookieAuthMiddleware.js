function cookieAuthMiddleware(req,res,next){
    if(req.cookies.recordarUser != undefined && req.session.usuarioLogueado == undefined) {
        req.session.usuarioLogueado = req.cookies.recordarUser; 
    }
    next()
}

module.exports = cookieAuthMiddleware