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
      console.log(req.body)
      db.User.create({
        nombre: req.body.nombre,
        email: req.body.email,
        password: req.body.password,
      }).then(() => {
        return res.redirect("/dashboard");
      });
    },

    editUser: function (req, res) {
      console.log('TEST')
      console.log(req.params)
      db.User.update(
        {
          nombre: req.body.nombre,
          email: req.body.email,
          password: req.body.password
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
  