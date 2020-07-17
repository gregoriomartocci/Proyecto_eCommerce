function usuariosMiddlewares (req,res,next){
    if(req.session.usuarioLogueado) {
        next();
    }else {
        return res.render("login", { errors: [{ msg: "Necesita una cuenta" }] });
    }
}

module.exports = usuariosMiddlewares;
