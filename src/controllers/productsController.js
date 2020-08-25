// DB
const path = require("path");
dbDir = path.resolve("db", "models");
const db = require(dbDir);

module.exports = {
  
  // ProductView
  show: function (req, res) {
    res.render("product/show");
  },

  form: function (req, res) {
    db.Category.findAll()
      .then((result) => {
        res.render("product/form", { categorias: result , session:req.session});
      })
      .catch((err) => {
        console.log(err);
        res.json({ error: true });
      });
  },

  store: function (req, res) {
    db.Product.create({
      nombre: req.body.nombre,
      precio: req.body.precio,
      idCategoria: req.body.idCategoria,
    });

    console.log(req.body);
    res.redirect("/");
  },
};
