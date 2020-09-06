// DB
const path = require("path");
const { render } = require("ejs");
dbDir = path.resolve("db", "models");
const db = require(dbDir);

module.exports = {

  add: function (req, res) {
    db.Product.create({
      nombre: req.body.nombre,
      marca: req.body.marca,
      modelo: req.body.modelo,
      precio: req.body.precio,
      stock: req.body.stock,
      idCategoria: req.body.idCategoria,
      img: path.join("img", req.file.filename),

      //API que puashea el producto
    }).then((product) => {
      db.Publication.create({
        idProducto: product.idProducto,
      });
      res.redirect("/");
    });
  },

};
