const path = require("path");
const { users } = require(".");
dbDir = path.resolve("db", "models");
const db = require(dbDir);

module.exports = {
  // Create

  add: function (req, res) {
    db.Product.findByPk(req.params.id)
      .then((product) => {
        let newCart = {
          userEmail: `${req.session.usuarioAlLoguearse}`,
          productName: product.nombre,
          idProducto: product.idProducto,
          cantidad: 0,
          precio: product.precio,
          new: false,
          subtotal: 0,
        };

        db.Cart.create(newCart);
        console.log(newCart);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

/* 

router.get("/movies/detail/:id", function (req, res) {  // Ruta Parametrizada
  db.Movie.findByPk(req.params.id)
    .then((singleMovie) => {
      res.render("detail", { movie: singleMovie });
    })
    .catch((err) => {
      console.log(err);
      res.json({ error: true });
    });
});


*/
