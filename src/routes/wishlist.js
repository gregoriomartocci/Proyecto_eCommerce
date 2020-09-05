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
const errors = require("http-errors");

router.get("/", controllers.wishlist.view)
router.get("/show", controllers.wishlist.show)
router.get("/add/:id", controllers.wishlist.add)


module.exports = router;
