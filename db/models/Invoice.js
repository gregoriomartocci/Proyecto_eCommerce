module.exports = function (sequelize, dataTypes) {
  let Invoice = sequelize.define(
    "Invoice",
    {
      idFactura: {
        type: dataTypes.INTEGER(11),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      fechaAlta: {
        type: dataTypes.DATE,
      },
      garantia: {
        type: dataTypes.DATE,
      },
    },
    {
      tableName: "facturas",
      timestamps: true,
    }
  );

  Invoice.associate = function (models) {
    Invoice.belongsTo(models.Order, {
      foreignKey: "idVenta",
      as: "Factura",
    });

    Invoice.belongsTo(models.User, {
      foreignKey: "idUsuario",
      as: "Recibo",
    });

    Invoice.belongsTo(models.PaymentMethod, {
      foreignKey: "idMedioPago",
      as: "medioPago",
    });
  };

  return Invoice;
};
