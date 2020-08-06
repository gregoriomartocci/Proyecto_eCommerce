function cookieAuthMiddleware(req,res,next){
    if(req.cookies.rememberMe != undefined && req.session.usuarioActual == undefined) {
        req.session.usuarioActual = req.cookies.rememberMe; 
    }
    next()
}

module.exports = cookieAuthMiddleware;
