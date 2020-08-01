module.exports = function (sequelize, dataTypes) {
  let Category = sequelize.define(
    "Category",
    {
      idCategoria: {
        type: dataTypes.INTEGER(11),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      nombre: {
        type: dataTypes.STRING(45),
      },
    },
    {
      tableName: "categorias",
      timestamps: false,
    }
  );

  return Category;
};
