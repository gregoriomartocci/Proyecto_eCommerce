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

router.get(
  "/checkout",
  usuariosMiddlewares,
  controllers.main.checkout
); /* GET - checkout */

router.get(
  "/productView",
  usuariosMiddlewares,
  controllers.main.productView
); /* GET - productView */

router.get(
  "/newProduct",
  usuariosMiddlewares,
  controllers.main.newProduct
); /* GET - newProduct */

// Probando las consultas

// Trayendo usuarios
router.get("/prueba", function (req, res) {
  db.User.findAll()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.json({ error: true });
    });
});

// Trayendo usuarios
router.get("/usuarioLogueado", function (req, res) {
  db.User.findAll()
    .then((result) => {
      res.send(`el usuario logueado es ${req.session.usuarioLogueado}`);
    })
    .catch((err) => {
      console.log(err);
      res.json({ error: true });
    });
});

module.exports = router;
