function usuariosMiddlewares (req,res,next){
    if(req.session.usuarioActual) {
        next();
    }else {
        return res.render("login", { errors: [{ msg: "Inicie sesion para continuar" }] });
    }
}

module.exports = usuariosMiddlewares;
