module.exports = function (sequelize, dataTypes) {
  let Cart = sequelize.define(
    "Cart",
    {
      idCarrito: {
        type: dataTypes.INTEGER(5),
        primaryKey: true,
      },
      idUsuario: {
        type: dataTypes.STRING(100),
      },
      total: {
        type: dataTypes.DECIMAL,
      },
      shippingAddress: {
        type: dataTypes.STRING(100),
      },
      billingAddress: {
        type: dataTypes.STRING(100),
      },
      createdAt: {
        type: dataTypes.DATE(),
      },
      updatedAt: {
        type: dataTypes.DATE(),
      },
    },
    {
      tableName: "carrito",
      timestamps: true,
      paranoid: false,
    }
  );

  Cart.associate = function (models) {
    Cart.belongsToMany(models.Product, {
      as: "Items",
      through: "carritoProductos",
      foreignKey: "idCarrito",
      otherKey: "idProducto",
      timestamps: false,
    });

    Cart.belongsTo(models.User, {
      foreignKey: "idUsuario",
      as: "User",
    });
  };

  return Cart;
};
