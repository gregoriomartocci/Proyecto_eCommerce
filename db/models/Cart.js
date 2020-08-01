module.exports = function (sequelize, dataTypes) {
  let Cart = sequelize.define(
    "Cart",
    {
      idCarrito: {
        type: dataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
      },
      idUsuario: {
        type: dataTypes.INTEGER(11),
        allowNull: false,
      },
    },
    {
      tableName: "carrito",
      timestamps: false,
      paranoid: false,
    }
  );

  Cart.associate = function (models) {
    Cart.belongsTo(models.Product, {
      foreignKey: "idProducto",
      as: "productoCarrito",
    });
  };

  return Cart;
};
