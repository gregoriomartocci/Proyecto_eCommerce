// ************ Require's ************
const express = require("express");
const router = express.Router();

// DB
const path = require("path");
dbDir = path.resolve("db", "models");
const db = require(dbDir);

// ************ Controller Require ************
const controllers = require("../controllers");
const usuariosMiddlewares = require("../middlewares/usuariosMiddlewares");

// Proboando CRUD con usuarios

// Listar todos los usuarios
router.get("/", function (req, res) {
  db.User.findAll()
    .then((result) => {
      res.render("dashboard/index", {
        users: result,
        title: "Proyecto",
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({ error: true });
    });
});

// CREATE
router.post("/add-product", controllers.dashboard.store);

// READ
router.get("/products", function (req, res) {
  db.Product.findAll()
    .then((products) => {
      res.render("dashboard/products", {
        products,
        title: "Proyecto",
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({ error: true });
    });
});

// UPDATE

router.post("/add-product", controllers.dashboard.store);

router.post("/update-product/:id", controllers.dashboard.update);

/*
router.put("/update-product/:id", function (req, res) {
  db.Product.update(req.body, {
    where: { idUsuario: req.params.id },
  }).then((result) => {
    res.redirect("/dashboard");
  });
});
*/

// DELETE
router.delete("/products/:id", function (req, res) {
  db.Product.destroy({
    where: { idProducto: req.params.id, action: `?_method=DELETE` },
  }).then((result) => {
    res.redirect("/dashboard/products");
  });
});

// LOGOUT
router.get("/logout", controllers.dashboard.logout);

/*
// DELETE Borrar el usuario con el ID
router.delete("/:id", function (req, res) {
  db.User.destroy({
    where: { idUsuario: req.params.id },
  }).then((result) => {
    res.redirect("/dashboard");
  });
});
*/

module.exports = router;
