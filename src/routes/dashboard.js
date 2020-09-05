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
const apiUser = require('../../api/users')
const apiProducts = require('../../api/products')

// Users

router.get("/getalluser", apiUser.getAllUser);

//Products

// Update
router.post("/update-product/:id", controllers.dashboard.update);

// LOGOUT


router.get("/getallproducts", apiProducts.getAllProducts);

router.put("/editproduct/:idProduct", apiProducts.editProduct);

router.delete("/deleteproduct/:idProduct", apiProducts.deleteProduct);

router.post("/addproduct", apiProducts.addProduct);

//ALL

router.get("/logout", controllers.dashboard.logout);

router.get("*", controllers.dashboard.showUsers);

module.exports = router;
