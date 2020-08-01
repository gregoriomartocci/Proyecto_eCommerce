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
      tableName: "factura",
      timestamps: false,
    }
  );

  Invoice.associate = function (models) {
    Invoice.belongsToMany(models.User, {
      as: "Factura",
      through: "usuariofactura",
      foreignKey: "idUsuario",
      otherKey: "idFactura",
      timestamps: false,
    });
  };

  return Invoice;
};
