const perfiles = require('../data/perfiles.json')

module.exports = (req,res,next) => {
    if(req.session.usuarioActual){
        res.locals.perfil = perfiles.logueado
      }else{
        res.locals.perfil = perfiles.huesped
    }
    next()
}