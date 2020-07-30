module.exports = function (sequelize, dataTypes) {
  let Product = sequelize.define(
    "Product",
    {
      idProductos: {
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
      createdAt: {
        type: dataTypes.DATE,
        allowNull: true,
      },
      updatedAt: {
        type: dataTypes.DATE,
        allowNull: true,
      },
      deletedAt: {
        type: dataTypes.DATE,
        allowNull: true,
      },

    },
    {
      tableName: "productos",
      timestamps: "true",
      paranoid:"true",
    }
  );

  return Product;
};
