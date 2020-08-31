// ************ Require's ************
const express = require("express");
const router = express.Router();
const productValidation = require("../middlewares/productValidation");

// DB
dbDir = path.resolve("db", "models");
const db = require(dbDir);

// ************ Controller Require ************
const controllers = require("../controllers");
const usuariosMiddlewares = require("../middlewares/usuariosMiddlewares");

router.get("/product-view", controllers.products.show);
router.get("/add-product", controllers.products.form);
router.post("/add-product", productValidation,  controllers.products.store);

module.exports = router;
