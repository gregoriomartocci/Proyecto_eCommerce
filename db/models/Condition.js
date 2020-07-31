module.exports = function (sequelize, dataTypes) {
  let Condition = sequelize.define(
    "Condition",
    {
      idEstado: {
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
      tableName: "estados",
      timestamps: false,
    }
  );

  Condition.associate = function (models) {
    Condition.hasMany(models.Product, {
      foreignKey: "idProductos",
      as:"estadoProducto"
    });
  };

  return Condition;
};
