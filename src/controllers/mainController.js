const fs = require("fs");
const path = require("path");


const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

// const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
  // Root
  root: function (req, res) {
    res.render("index", {
      products: products,
      user: req.session.usuarioLogueado,
    })
  },

  // Check-Out
  checkout: function (req, res) {
    res.render("checkout");
  },

  // ProductView
  productView: function (req, res) {
    res.render("productView");
  },

  newProduct: function (req, res) {
    res.render("newProduct");
  },
};
