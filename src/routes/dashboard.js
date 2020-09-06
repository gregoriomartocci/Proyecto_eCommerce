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
const apiUsers = require('../../api/users')
const apiProducts = require('../../api/products')
const apiPublication = require('../../api/publication')
const apiComments = require('../../api/comments')

// Users

router.get("/getalluser", apiUsers.getAllUser);

router.put("/edituser/:idUser", apiUsers.editUser);

router.delete("/deleteuser/:idUser", apiUsers.deleteUser);

router.post("/adduser", apiUsers.addUser);

//Products

router.get("/getallproducts", apiProducts.getAllProducts);

router.put("/editproduct/:idProduct", apiProducts.editProduct);

router.delete("/deleteproduct/:idProduct", apiProducts.deleteProduct);

router.post("/addproduct", apiProducts.addProduct);

//Publicaciones

router.get("/getallpublication", apiPublication.getAllPublication);

router.put("/editpublication/:idPublication", apiPublication.editPublication);

router.delete("/deletepublication/:idPublication", apiPublication.deletePublication);

router.post("/addpublication", apiPublication.addPublication);

//Comentarios

router.get("/getallcomments", apiComments.getAllComments);

router.put("/editcomment/:idComment", apiComments.editComment);

router.delete("/deletecomment/:idComment", apiComments.deleteComment);

router.post("/addcomment", apiComments.addComment);

//ALL

router.get("/logout", controllers.dashboard.logout);

router.get("*", controllers.dashboard.showUsers);

module.exports = router;
