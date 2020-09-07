const path = require("path");
const { users, cart } = require(".");
dbDir = path.resolve("db", "models");
const db = require(dbDir);

module.exports = {
  // Create

  show: function (req, res) {
    res.json(req.session.cart);
  },

  view: function (req, res) {
    res.render("cart-view", {
      cart: req.session.cart,
      session: req.session,
      wishlist: req.session.wishlist,
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
            updateCart.totalItems++;
            updateCart.total += new Number(existingItem.precio);
            req.session.cart = updateCart;
            res.redirect("/");
          } else {
            item = {
              idProducto: product.idProducto,
              img: product.img,
              nombre: product.nombre,
              cantidad: 1,
              precio: product.precio,
            };
            updateCart.items.push(item);
            updateCart.totalItems++;
            updateCart.total += new Number(product.precio);
          }

          req.session.cart = updateCart;
          res.redirect("/");
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
            totalItems: 0,
            total: 0,
          };

          item = {
            idProducto: product.idProducto,
            img: product.img,
            nombre: product.nombre,
            cantidad: 1,
            precio: product.precio,
          };

          newCart.items.push(item);
          newCart.totalItems++;
          newCart.total = new Number(product.precio);
          req.session.cart = newCart;
          res.redirect("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },

  remove: function (req, res) {
    const cart = req.session.cart;

    const isExisting = cart.items.findIndex(
      (p) => p.idProducto == req.params.id
    );

    if (isExisting >= 0) {
      const deletedProduct = cart.items[isExisting];

      if (deletedProduct.cantidad == 1) {
        cart.items.splice(isExisting, 1);
      } else {
        deletedProduct.cantidad--;
      }

      cart.total -= deletedProduct.precio * deletedProduct.cantidad;
      cart.totalItems--;
    }

    res.redirect("/");
  },
};
