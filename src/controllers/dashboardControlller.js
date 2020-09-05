// DB
const path = require("path");
dbDir = path.resolve("db", "models");
const db = require(dbDir);

module.exports = {
  //Users

  showUsers: function (req, res) {
       res.sendFile(path.join(__dirname,'../../react/build/index.html'))
  },

  storeUser: function (req, res) {
    db.Product.create({
      nombre: req.body.nombre,
      precio: req.body.precio,
    }).then(() => {
      return res.redirect("/dashboard/products");
    });
  },

  editUser: function (req, res) {
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

  updateUser: function (req, res) {
    db.User.update(
      {
        nombre: req.body.nombre,
        precio: req.body.precio,
      },
      {
        where: {
          idUsuario: req.params.id,
        },
      }
    ).then(() => {
      return res.redirect("/dashboard");
    });
  },

  deleteUser: function (req, res) {
    db.User.destroy({
      where: { idUsuario: req.params.id },
    }).then(() => {
      res.redirect("/dashboard/products");
    });
  },

  // Products

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

  logout: function (req, res) {
    req.session.destroy();
    return res.redirect("login");
  },
};
