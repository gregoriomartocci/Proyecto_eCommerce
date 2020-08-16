let invitadosMiddlewares = function(req,res,next){
    if(!req.session.user) {
        next();
    }else {
        res.send('Usted ya esta logueado')
    }
}

module.exports = invitadosMiddlewares;
