// ************ Require's ************
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

// ************ Controller Require ************
const controllers = require("../controllers");
const usuariosMiddlewares = require("../middlewares/usuariosMiddlewares");

// DB
dbDir = path.resolve("db", "models");
const db = require(dbDir);

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    let ext = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${Date.now()}-${ext}`);
  },

  destination: function (req, file, cb) {
    cb(null, path.resolve("src", "uploads", "product-img"));
  },
});

let upload = multer({ storage: storage });

router.get("/view", controllers.publication.show);
router.get("/add", controllers.publication.form);
router.post("/add", upload.single("img"), controllers.publication.store);

module.exports = router;
