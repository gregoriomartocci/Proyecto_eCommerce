const db = require(dbDir);

module.exports = { 
    getAllPublication: function(req,res) {
      db.Publication.findAll()
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        res.json({ error: true });
      });
    },
    
    deletePublication: function(req,res) {
      db.Publication.destroy({
          where: { idPublicacion: req.params.idPublication },
        }).then(() => {
          res.redirect("/dashboard/publication");
        });
    },


    addPublication: function (req, res) {
      db.Publication.create({
        idUsuario: req.body.idUser,
        idProducto: req.body.idProduct,
      }).then(() => {
        return res.redirect("/dashboard/publication");
      });
    },

    editPublication: function (req, res) {
      db.Publication.update(
        {
          idUsuario: req.body.idUser,
          idProducto: req.body.idProduct,
        },
        {
          where: {
            idPublicacion: req.params.idPublication,
          },
        }
      ).then(() => {
        return res.redirect("/dashboard/publication");
      });
    },

};



  