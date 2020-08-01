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
      timestamps: false,
    }
  );

  Invoice.associate = function (models) {
    Invoice.belongsToMany(models.User, {
      as: "Usuarios",
      through: "usuariofactura",
      foreignKey: "idFactura",
      otherKey: "idUsuario",
      timestamps: false,
    });
  };

  return Invoice;
};
