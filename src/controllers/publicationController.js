// DB
const path = require("path");
const { render } = require("ejs");
dbDir = path.resolve("db", "models");
const db = require(dbDir);

module.exports = {
  // PublicationView
  show: function (req, res) {
    // Trayendo Estados

    db.Publication.findAll({
      include: ["product"],
      raw: true,
      nest: true,
    })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
        res.json({ error: true });
      });
  },

  form: function (req, res) {
    db.Category.findAll()
      .then((result) => {
        res.render("publication/form", {
          categorias: result,
          session: req.session,
          cart: req.session.cart,
        });
      })
      .catch((err) => {
        console.log(err);
        res.json({ error: true });
      });
  },

  store: function (req, res) {
    db.Product.create({
      nombre: req.body.nombre,
      marca: req.body.marca,
      modelo: req.body.modelo,
      precio: req.body.precio,
      stock: req.body.stock,
      idCategoria: req.body.idCategoria,
      img: path.join("img", req.file.filename),
    }).then((product) => {
      db.Publication.create({
        idProducto: product.idProducto,
      });
      res.redirect("/");
    });
  },
};
