module.exports = function (sequelize, dataTypes) {
  let Cart = sequelize.define(
    "Cart",
    {
      idCarrito: {
        type: dataTypes.INTEGER(5),
        primaryKey: true,
      },
      userEmail: {
        type: dataTypes.STRING(100),
      },
      productName: {
        type: dataTypes.STRING(100),
      },
      idProducto: {
        type: dataTypes.INTEGER(5),
      },
      cantidad: {
        type: dataTypes.INTEGER(5),
      },
      precio: {
        type: dataTypes.DECIMAL(),
      },
      new: {
        type: dataTypes.BOOLEAN(),
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

  Cart.associate = function (models) {
    Cart.belongsToMany(models.Product, {
      as: "productos",
      through: "carritoProducto",
      foreignKey: "idCarrito",
      otherKey: "idProducto",
      timestamps: false,
    });
  };

  return Cart;
};
