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
    db.Order.create({
      idUsuario: req.session.user.idUsuario,
    }).then((order) => {
      db.Invoice.create({
        idUsuario: req.session.user.idUsuario,
        idVenta: order.idVenta,
      });
    })
    res.redirect("/")
  },
};
