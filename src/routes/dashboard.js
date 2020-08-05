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

// Users

router.get("/", controllers.dashboard.showUsers);

//Products

// Create
router.post("/add-product", controllers.dashboard.store);

// Read
router.get("/products", controllers.dashboard.show);

// Update
router.post("/update-product/:id", controllers.dashboard.update);

// Store
router.post("/add-product", controllers.dashboard.store);

// Delete
router.post("/products/delete-product/:id", controllers.dashboard.delete);

// LOGOUT
router.get("/logout", controllers.dashboard.logout);

module.exports = router;
