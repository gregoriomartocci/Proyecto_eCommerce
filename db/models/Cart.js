module.exports = function (sequelize, dataTypes) {
  let Cart = sequelize.define(
    "Cart",
    {
      idCarrito: {
        type: dataTypes.INTEGER(5),
        allowNull: false,
        primaryKey: true,
      },
      userEmail: {
        type: dataTypes.INTEGER(5),
      },
      idProducto: {
        type: dataTypes.INTEGER(5),
      },
      cantidad: {
        type: dataTypes.INTEGER(5),
      },
      new:{
        type: dataTypes.BOOLEAN(true),
      },
      subtotal: {
        type: dataTypes.DECIMAL,
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
