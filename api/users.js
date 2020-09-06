const db = require(dbDir);

module.exports = { 
    getAllUser: function(req,res) {
      db.User.findAll()
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        res.json({ error: true });
      });
    },

    deleteUser: function(req,res) {
      db.User.destroy({
          where: { idUsuario: req.params.idUser },
        }).then(() => {
          res.redirect("/dashboard");
        });
    },


    addUser: function (req, res) {
      db.User.create({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        nivel: req.body.nivel,
        password: req.body.password,
      }).then(() => {
        return res.redirect("/dashboard");
      });
    },

    editUser: function (req, res) {
      db.User.update(
        {
          nombre: req.body.nombre,
          apellido: req.body.apellido,
          email: req.body.email,
          nivel: req.body.nivel,
          password: req.body.password,
        },
        {
          where: {
            idUsuario: req.params.idUser,
          },
        }
      ).then(() => {
        return res.redirect("/dashboard");
      });
    },
};
  