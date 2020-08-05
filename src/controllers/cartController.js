const path = require("path");
const { users } = require(".");
dbDir = path.resolve("db", "models");
const db = require(dbDir);

module.exports = {
  // Create

  show: function (req, res) {
    db.Cart.findall({
      where: { userEmail: req.session.usuarioActual },
    }).then((product) => {
      res.redirect("index", {
        product,
      });
    });
  },

  add: function (req, res) {
    db.Product.findByPk(req.params.id)
      .then((product) => {
        let newCart = {
          userEmail: `${req.session.usuarioAlLoguearse}`,
          productName: product.nombre,
          idProducto: product.idProducto,
          cantidad: 0,
          precio: product.precio,
          new: false,
          subtotal: 0,
        };

        db.Cart.create(newCart);
        console.log(newCart);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log("ok");
  },
};
