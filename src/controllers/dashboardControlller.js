// DB
const path = require("path");
dbDir = path.resolve("db", "models");
const db = require(dbDir);

module.exports = {
  store: function (req, res) {
    db.Product.create({
      nombre: req.body.nombre,
      precio: req.body.precio,
    });

    res.redirect("/dashboard/products");
  },

  edit: function (req, res) {
    let productReq = db.Product.findAll();
    let categoryReq = db.Category.findAll();

    Promise.all([productReq, categoryReq])
      .then(function ([products, category]) {
        res.render("dashboard/products", {
          products,
          category,
          title: "Proyecto",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },

  update: function (req, res) {
    db.Product.update(
      {
        nombre: req.body.nombre,
        precio: req.body.precio,
      },
      {
        where: {
          idProducto: req.params.id,
        },
      }
    );
    return res.redirect("/dashboard/products");
  },

  logout: function (req, res) {
    req.session.destroy();
    return res.redirect("login");
  },
};
