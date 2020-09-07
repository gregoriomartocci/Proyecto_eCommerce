// DB
const path = require("path");
const { render } = require("ejs");
dbDir = path.resolve("db", "models");
const db = require(dbDir);

module.exports = {

  add:function(req,res){

    db.Comments.create({
      nombre:req.body.nombre,
      comentario:req.body.comentario
    }).then(()=> res.redirect("/"))
  }

  
/*
  add: function (req, res) {
    db.User.findByPk(req.session.user.idUsuario).then((user) => {
      db.Comments.create({ idUsuario:user.idUsuario, idPublicacion: req.params.id }).then((comment) => {
        user.addComments(comment);
      });
    });
  },
*/
};
