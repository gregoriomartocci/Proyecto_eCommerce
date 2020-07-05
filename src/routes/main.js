// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const mainController = require("../controllers/mainController");

router.get("/", mainController.root); /* GET - home page */

router.get("/checkout", mainController.checkout); /* GET - checkout */

router.get("/productView", mainController.productView); /* GET - product */

router.get("/newProduct", mainController.newProduct); /* GET - product */

module.exports = router;
