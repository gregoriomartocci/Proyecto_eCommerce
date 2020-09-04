const fs = require("fs");
const path = require("path");
const swal = require("sweetalert");

dbDir = path.resolve("db", "models");
const db = require(dbDir);

/*
const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
*/

// const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
  // Root
  root: function (req, res) {
    db.Publication.findAll({
      include: ["product"],
      limit: 4,
    })
      .then((publications) => {
        console.log(publications, req.session.cart);
        res.render("index", {
          publications,
          session: req.session.user,
          cart: req.session.cart,
        });
      })
      .catch((err) => {
        console.log(err);
        res.json({ error: true });
      });
  },

  viewCart: function (req, res) {
    res.render("view-cart", {
      session: req.session,
      cart: req.session.cart,
    });
  },

  // Check-Out
  checkout: function (req, res) {
    res.render("checkout", {
      session: req.session.user,
      cart: req.session.cart,
    });
  },
};
