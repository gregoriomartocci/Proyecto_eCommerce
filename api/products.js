const db = require(dbDir);

module.exports = { 
    getAllProducts: function(req,res) {
      db.Product.findAll()
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        res.json({ error: true });
      });
    },
    
    deleteProduct: function(req,res) {
      db.Product.destroy({
          where: { idProducto: req.params.idProduct },
        }).then(() => {
          res.redirect("/dashboard/products");
        });
    },


    addProduct: function (req, res) {
      db.Product.create({
        nombre: req.body.nombre,
        precio: req.body.precio,
      }).then(() => {
        return res.redirect("/dashboard/products");
      });
    },

    editProduct: function (req, res) {
      db.Product.update(
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
        return res.redirect("/dashboard/products");
      });
    },

};



  