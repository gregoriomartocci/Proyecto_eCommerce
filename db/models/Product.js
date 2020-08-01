module.exports = function (sequelize, dataTypes) {
  let Product = sequelize.define(
    "Product",
    {
      idProducto: {
        type: dataTypes.INTEGER(11),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      nombre: {
        type: dataTypes.STRING(45),
      },
      precio: {
        type: dataTypes.DECIMAL,
      },
      descripcion: {
        type: dataTypes.TEXT,
        allowNull: true,
      },
      rating: {
        type: dataTypes.DECIMAL,
        allowNull: true,
      },
    },
    {
      tableName: "productos",
      timeStamps: true,
      paranoid: true,
    }
  );

  Product.associate = function (models) {
    Product.belongsTo(models.Condition, {
      foreignKey: "idEstado",
      as: "estadoProducto",
    });
  };

  return Product;
};
