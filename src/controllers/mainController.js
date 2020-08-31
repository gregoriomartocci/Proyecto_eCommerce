const fs = require("fs");
const path = require("path");

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

  // Check-Out
  checkout: function (req, res) {
    res.render("checkout", {
      session: req.session.user,
      cart: req.session.cart,
    });
  },
};
