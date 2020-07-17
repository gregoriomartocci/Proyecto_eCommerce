const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

// const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  // Root
  root: (req, res) => {
    res.render("index", { products: products, user: req.session.usuarioLogueado });
  },

  // Check-Out
  checkout: (req, res) => {
    res.render("checkout");
  },

  // ProductView
  productView: (req, res) => {
    res.render("productView");
  },

  newProduct: (req, res) => {
    res.render("newProduct");
  },
};

module.exports = controller;
