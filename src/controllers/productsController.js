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
    res.render("product/form");
  },
};
