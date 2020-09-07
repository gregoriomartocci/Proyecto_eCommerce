const fs = require("fs");
const path = require("path");
const swal = require("sweetalert");

dbDir = path.resolve("db", "models");
const db = require(dbDir);

module.exports = {
  // Root
  root: function (req, res) {
    
    db.Publication.findAll({
      include: ["product"],
      limit: 4,
    })
      .then((publications) => {
        db.Publication.findAll({
          include: ["product"],
          offset: 8,
          limit: 4,
        }).then((listing2) => {
          res.render("index", {
            listing2,
            publications,
            session: req.session.user,
            cart: req.session.cart,
            wishlist: req.session.wishlist,
          });
        });
      })
      .catch((err) => {
        console.log(err);
        res.json({ error: true });
      });
  },

  // Check-Out
  checkout: function (req, res) {
    res.render("checkout", {
      session: req.session.user,
      cart: req.session.cart,
      wishlist: req.session.wishlist,
    });
  },
};
