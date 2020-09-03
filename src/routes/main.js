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

router.get("/", controllers.main.root); /* GET - home page */

router.get("/view-cart", controllers.main.viewCart); /* GET - home page */

router.get(
  "/checkout",
  usuariosMiddlewares,
  controllers.main.checkout
); /* GET - checkout */

// Probando las consultas

// Trayendo usuarios
router.get("/usuarioLogueado", function (req, res) {
  res.send(`el usuario logueado es ${req.session.usuarioActual}`);
  console.log(req.session.usuarioActual);
});

router.get("/idUsuario", function (req, res) {
  res.send(`el id del usuario logueado es ${req.session.idUsuario}`);
});

// Trayendo Producto
router.get("/traerProducto", function (req, res) {
  db.Product.findAll({
    include: ["estadoProducto"],
  })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.json({ error: true });
    });
});

// Trayendo Producto
router.get("/store", function (req, res) {
  db.Publication.findAll({
    include: ["product"],
  })
    .then((publications) => {
      res.render("store", {
        session: req.session,
        publications,
        cart: req.session.cart,
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({ error: true });
    });
});

// Trayendo Estados
router.get("/traer", function (req, res) {
  db.Condition.findAll()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.json({ error: true });
    });
});

// Trayendo Usuarios
router.get("/traerUsuarios", function (req, res) {
  db.User.findAll({
    include: ["Cart", "Facturacion"],
    raw: true,
    nest: true,
  })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.json({ error: true });
    });
});

// Trayendo Carrito
router.get("/traerCart", function (req, res) {
  db.Cart.findAll({
    include: ["User", "Items"],
  })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.json({ error: true });
    });
});

// Trayendo Facturas
router.get("/traerFacturas", function (req, res) {
  db.Invoice.findAll()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.json({ error: true });
    });
});

// Trayendo medioDePago
router.get("/traerformasPago", function (req, res) {
  db.PaymentMethod.findAll()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.json({ error: true });
    });
});

// Trayendo medioDePago
router.get("/traercategorias", function (req, res) {
  db.Category.findAll()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.json({ error: true });
    });
});

// Dashboard Prueba
router.get("/prueba", function (req, res) {
  res.render("pruebadashboard");
});

module.exports = router;
