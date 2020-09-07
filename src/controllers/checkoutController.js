const path = require("path");
const { users, cart } = require(".");
dbDir = path.resolve("db", "models");
const db = require(dbDir);

module.exports = {
  summary: function (req, res) {
    res.render("checkout", {
      wishlist: req.session.wishlist,
      session: req.session,
      cart: req.session.cart,
    });
  },

  order: function (req, res) {

    let cart = req.session.cart;
    let concept = [];

    cart.items.forEach(function (item) {
      const conceptItem = {
        idItem: item.idProducto,
        precio: item.precio,
        cantidad: item.cantidad,
        totalItems: cart.totalItems,
        envio: 0,
        total: cart.total,
      };
      concept.push(conceptItem);
    });

    db.Concept.bulkCreate(concept, { returning: true }).then((concepto) => {
      db.Order.create({
        idConcepto: concepto,
        idUsuario: req.session.user.idUsuario,
      }).then((order) => {
        order.addConcept(concept.idConcepto);
      });
      res.redirect("/");
    });
  },
};

/*

db.Invoice.create({
          idUsuario: req.session.user.idUsuario,
          idVenta: order.idVenta,
        });

        
*/
