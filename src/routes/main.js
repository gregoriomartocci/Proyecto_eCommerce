// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const controllers = require('../controllers')
const usuariosMiddlewares = require("../middlewares/usuariosMiddlewares");

router.get("/", controllers.main.root); /* GET - home page */

router.get("/checkout", controllers.main.checkout); /* GET - checkout */

router.get("/productView",  controllers.main.productView); /* GET - productView */

router.get("/newProduct",  controllers.main.newProduct); /* GET - newProduct */

module.exports = router;
