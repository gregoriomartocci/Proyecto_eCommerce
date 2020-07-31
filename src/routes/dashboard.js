// ************ Require's ************
const express = require("express");
const router = express.Router();

// DB
const path = require("path");
dbDir = path.resolve("db", "models");
const db = require(dbDir);

// Proboando CRUD con usuarios

// Listar todos los usuarios
router.get("/", function (req, res) {
  db.User.findAll()
    .then((result) => {
      res.render("dashboard/index", {
        users: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({ error: true });
    });
});

// GET Trae el formulario para crear un Usuario
router.get("/form", function (req, res) {
  res.render("dashboard/form", {
    title: " Crear usuario ",
    actionUrl: ``,
    user: {},
  });
});

// GET: Trae 1 Usuario
router.get("/:id", function (req, res) {
  db.User.findByPk(req.params.id)
    .then((result) => {
      res.render("dashboard/show", {
        title: "Informacion de Usuario",
        user: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({ error: true });
    });
});

// GET Trae el formulario para editar un Usuario
router.get("/form/:id", function (req, res) {
  db.User.findByPk(req.params.id).then((result) => {
    res.render("dashboard/form", {
      title: " Editar Usuario",
      actionUrl: `/${req.params.id}?_method=PUT`,
      user: result,
    });
  });
});

// Enviar los datos del formulario de creacion
router.post("/", function (req, res) {
  db.User.create(req.body).then(result => {
    res.send('ok')
  })
});

// PUT Enviar los datos del formulario de Edicion
router.put("/:id", function (req, res) {
  db.User.update(req.body, {
    where: { idUsuario: req.params.id },
  }).then(result => {
    res.redirect("/dashboard")
  });
});

// DELETE Borrar el usuario con el ID
router.delete("/:id", function (req, res) {
  db.User.destroy({
    where:{idUsuario:req.params.id}
  }).then(result => {
    res.redirect("/dashboard")
  })
});

module.exports = router;


// Deberiamos Validar