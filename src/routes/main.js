// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const controllers = require('../controllers')
const usuariosMiddlewares = require("../middlewares/usuariosMiddlewares");

router.get("/", controllers.main.root); /* GET - home page */

router.get("/checkout",usuariosMiddlewares, controllers.main.checkout); /* GET - checkout */

router.get("/productView",usuariosMiddlewares, controllers.main.productView); /* GET - productView */

router.get("/newProduct",usuariosMiddlewares,  controllers.main.newProduct); /* GET - newProduct */

module.exports = router;
