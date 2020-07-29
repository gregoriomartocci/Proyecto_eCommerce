module.exports = function (sequelize, dataTypes) {
  let Product = sequelize.define(
    "Product",
    {
      idProducto: {
        type: dataTypes.INTEGER(11),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      nombre: {
        type: dataTypes.STRING(45),
      },
      categoria: {
        type: dataTypes.INTEGER(5),
      },
      precio: {
        type: dataTypes.FLOAT,
        allowNull: true,
      },
      stock: {
        type: dataTypes.INTEGER(6),
        allowNull: true,
      },
      descripcion: {
        type: dataTypes.TEXT("tiny"),
        allowNull: true,
      },
      rating: {
        type: dataTypes.DECIMAL(5, 2),
        allowNull: true,
      },
      descuento: {
        type: dataTypes.BOOLEAN,
        allowNull: true,
      },
      nuevo: {
        type: dataTypes.BOOLEAN,
        allowNull: true,
      },
    },
    {
      tableName: "producto",
      timestamps: "true",
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
    }
  );

  return Product;
};
