function cookieAuthMiddleware(req,res,next){
    if(req.cookies.rememberMe != undefined && req.session.user == undefined) {
        req.session.user = req.cookies.rememberMe; 
    }
    next()
}

module.exports = cookieAuthMiddleware;
