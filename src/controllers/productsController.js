// DB
const path = require("path");
dbDir = path.resolve("db", "models");
const db = require(dbDir);

module.exports = {
  // ProductView
  show: function (req, res) {
    res.render("product/show");
  },

  form: function (req, res) {
    res.render("product/form");
  },

  store: function (req, res) {
    db.Product.create({
      nombre: req.body.nombre,
      precio: req.body.precio,
    });

    res.redirect("/");
  },
};
