const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

// const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  // Root
  root: (req, res) => {
<<<<<<< HEAD
    res.render("index", { products: products});
=======
    res.render("index", { products: products, user: req.session.usuarioLogueado });
>>>>>>> 57effffb2885a9714fd2aa903b24e50b20672d1b
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
