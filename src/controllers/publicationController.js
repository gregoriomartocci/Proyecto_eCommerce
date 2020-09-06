// DB
const path = require("path");
const { render } = require("ejs");
dbDir = path.resolve("db", "models");
const db = require(dbDir);

module.exports = {
  // PublicationView
  showAll: function (req, res) {
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

  showById: function (req, res) {
    db.Publication.findByPk(req.params.id, {
      include: ["product","comentarios"],
    })
      .then((publication) => {
        //res.json(publication)
        res.render("product/view", {
          publication,
          cart: req.session.cart,
          session: req.session.user,
          wishlist: req.session.wishlist,
          posteos:publication.posteos
        });
      })
      .catch((error) => {
        console.log(error);
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
          wishlist: req.session.wishlist,
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

      //API que puashea el producto
    }).then((product) => {
      db.Publication.create({
        idProducto: product.idProducto,
      });
      res.redirect("/");
    });
  },
};
