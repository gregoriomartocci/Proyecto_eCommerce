const path = require("path");
const { users, cart } = require(".");
dbDir = path.resolve("db", "models");
const db = require(dbDir);

module.exports = {
  // Create

  show: function (req, res) {
    res.json(req.session.wishlist);
  },

  view: function (req, res) {
    res.render("wishlist", {
      wishlist: req.session.wishlist,
      session: req.session,
      cart: req.session.cart,
    });
  },

  add: function (req, res) {
    if (req.session.wishlist) {
      db.Product.findByPk(req.params.id)
        .then((product) => {
          updateWishlist = req.session.wishlist;
          const existingItemIndex = updateWishlist.items.findIndex(
            (i) => i.idProducto == product.idProducto
          ); // checkeo que existe

          if (existingItemIndex >= 0) {
            const existingItem = updateWishlist.items[existingItemIndex];
            const existingQty = existingItem.cantidad;
            existingItem.cantidad = existingQty + 1;
            updateWishlist.totalItems++;
            updateWishlist.total += new Number(existingItem.precio);
            req.session.wishlist = updateWishlist;
            res.redirect("/");
          } else {
            item = {
              idProducto: product.idProducto,
              img: product.img,
              nombre: product.nombre,
              cantidad: 1,
              precio: product.precio,
            };
            updateWishlist.items.push(item);
            updateWishlist.totalItems++;
            updateWishlist.total += new Number(product.precio);
          }

          req.session.wishlist = updateWishlist;
          res.redirect("/");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      db.Product.findByPk(req.params.id)
        .then((product) => {
          newWishlist = {
            idUsuario: req.session.idUsuario,
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

          newWishlist.items.push(item);
          newWishlist.totalItems++;
          newWishlist.total = new Number(product.precio);
          req.session.wishlist = newWishlist;

          db.User.findByPk(req.session.user.idUsuario).then((user) => {
            db.Wishlist.create({ idPublicacion: product.idProducto }).then(
              (wish) => {
                user.addWishlist(wish);
              }
            );
          });

          res.redirect("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },

  remove: function (req, res) {

    res.send("ok")
    
    /*
    const wishlist = req.session.wishlist;

    const isExisting = wishlist.items.findIndex(
      (p) => p.idProducto == req.params.id
    );

    if (isExisting >= 0) {
      const deletedProduct = wishlist.items[isExisting];

      if (deletedProduct.cantidad == 1) {
        wishlist.items.splice(isExisting, 1);
      } else {
        deletedProduct.cantidad--;
      }

      wishlist.total -= deletedProduct.precio * deletedProduct.cantidad;
      wishlist.totalItems--;
    }

    res.redirect("/");

    */
  },
};
