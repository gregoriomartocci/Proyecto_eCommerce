const path = require("path");
const { users, cart } = require(".");
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
    if (req.session.cart) {
      db.Product.findByPk(req.params.id)
        .then((product) => {
          updateCart = req.session.cart;
          const existingItemIndex = updateCart.items.findIndex(
            (i) => i.idProducto == product.idProducto
          ); // checkeo que existe

          if (existingItemIndex >= 0) {
            const existingItem = updateCart.items[existingItemIndex];
            const existingQty = existingItem.cantidad;
            existingItem.cantidad = existingQty + 1;
            updateCart.total += new Number(existingItem.precio)
            req.session.cart = updateCart;
            res.json(req.session.cart)
            
          } else {
            item = {
              idProducto: product.idProducto,
              cantidad: 1,
              precio: product.precio,
            };
            updateCart.items.push(item);
            updateCart.total += new Number(product.precio);
          }

          req.session.cart = updateCart;
          res.json(req.session.cart);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      db.Product.findByPk(req.params.id)
        .then((product) => {
          newCart = {
            idUsuario: req.session.idUsuario,
            shippingAddress: "",
            billingAddress: "",
            items: [],
            total: 0,
          };

          item = {
            idProducto: product.idProducto,
            cantidad: 1,
            precio: product.precio,
          };
          newCart.items.push(item);
          newCart.total = new Number(product.precio);
          req.session.cart = newCart;
          res.json(req.session.cart);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
};
