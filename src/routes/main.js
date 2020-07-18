// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const mainController = require("../controllers/mainController");
const usuariosMiddlewares = require("../middlewares/usuariosMiddlewares");


router.get("/", mainController.root); /* GET - home page */

router.get("/checkout", usuariosMiddlewares , mainController.checkout); /* GET - checkout */

router.get("/productView", mainController.productView); /* GET - productView */

router.get("/newProduct", usuariosMiddlewares, mainController.newProduct); /* GET - newProduct */

module.exports = router;
