// DB
const path = require("path");
dbDir = path.resolve("db", "models");
const db = require(dbDir);

module.exports = {

  show:function (req, res) {
    db.Product.findAll()
      .then((products) => {
        res.render("dashboard/products", {
          products,
          title: "Proyecto",
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
      precio: req.body.precio,
    })
    .then(() => {
      return res.redirect("/dashboard/products");
    });
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
    ).then(() => {
      return res.redirect("/dashboard/products");
    });
  },

  delete:function (req, res) {
    db.Product.destroy({
      where: { idProducto: req.params.id},
    }).then(() => {
      res.redirect("/dashboard/products");
    });
  },

  
  //Users

  showUsers:function (req, res) {
    db.User.findAll()
      .then((result) => {
        res.render("dashboard/index", {
          users: result,
          title: "Proyecto",
        });
      })
      .catch((err) => {
        console.log(err);
        res.json({ error: true });
      });
  },

  logout: function (req, res) {
    req.session.destroy();
    return res.redirect("login");
  },
};
