const path = require("path");
const { users } = require(".");
dbDir = path.resolve("db", "models");
const db = require(dbDir);

module.exports = {
  // Create

  add: function (req, res) {
    db.Product.findByPk(req.params.id).then((product) => {
      db.Cart.create({
        userEmail: req.session.usuarioAlLoguearse,
        poductId: product.idProduct,
        productName: product.name,
        precio: product.precio,
        cantidad: 0,
        new: false,
        subtotal: 0,
      });
    })
  },
};
