module.exports = function (sequelize, dataTypes) {
  let Cart = sequelize.define(
    "Cart",
    {
      idCarrito: {
        type: dataTypes.INTEGER(5),
        allowNull: false,
        primaryKey: true,
      },
      idUsuario: {
        type: dataTypes.INTEGER(5),
        allowNull: false,
      },
      idProducto: {
        type: dataTypes.INTEGER(5),
        allowNull: false,
      },
      cantidad: {
        type: dataTypes.INTEGER(5),
        allowNull: false,
      },
      subtotal: {
        type: dataTypes.DECIMAL,
        allowNull: false,
      },
    },
    {
      tableName: "carrito",
      timestamps: false,
      paranoid: false,
    }
  );

  return Cart;
};
