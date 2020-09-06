const db = require(dbDir);

module.exports = { 
    getAllComments: function(req,res) {
      db.Comments.findAll()
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        res.json({ error: true });
      });
    },
    
    deleteComment: function(req,res) {
      db.Comentarios.destroy({
          where: { idProducto: req.params.idProduct },
        }).then(() => {
          res.redirect("/dashboard/comments");
        });
    },


    addComment: function (req, res) {
      db.Comentarios.create({
        nombre: req.body.nombre,
        precio: req.body.precio,
      }).then(() => {
        return res.redirect("/dashboard/comments");
      });
    },

    editComment: function (req, res) {
      db.Comentarios.update(
        {
          nombre: req.body.nombre,
          precio: req.body.precio,
        },
        {
          where: {
            idProducto: req.params.idProduct,
          },
        }
      ).then(() => {
        return res.redirect("/dashboard/comments");
      });
    },

};



  