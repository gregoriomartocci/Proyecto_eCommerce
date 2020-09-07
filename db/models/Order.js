module.exports = function (sequelize, dataTypes) {
  let Order = sequelize.define(
    "Order",
    {
      idVenta: {
        type: dataTypes.INTEGER(11),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      createdAt: {
        type: dataTypes.DATE,
      },
      updatedAt: {
        type: dataTypes.DATE,
      },
      deletedAt: {
        type: dataTypes.DATE,
      },
    },
    {
      tableName: "ventas",
      timestamps: true,
    }
  );

  Order.associate = function (models) {
    Order.belongsTo(models.User, {
      foreignKey: "idUsuario",
      as: "Ordenes",
    });

    Order.belongsToMany(models.Concept, {
      through: "orderconcept",
      as: "Concept",
      foreignKey: "idVenta",
      otherKey: "idConcepto",
      timestamps: false,
    });
  };

  return Order;
};
