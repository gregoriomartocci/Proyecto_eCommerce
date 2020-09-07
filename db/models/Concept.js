module.exports = function (sequelize, dataTypes) {
  let Concept = sequelize.define(
    "Concept",
    {
      id: {
        type: dataTypes.INTEGER(11),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      idItem: {
        type: dataTypes.INTEGER(11),
      },
      precio: {
        type: dataTypes.INTEGER(11),
      },
      cantidad: {
        type: dataTypes.INTEGER(11),
      },
      totalItems: {
        type: dataTypes.INTEGER(11),
      },
      envio: {
        type: dataTypes.INTEGER(11),
      },
      total: {
        type: dataTypes.INTEGER(11),
      },
    },
    {
      tableName: "concepto",
      timestamps: false,
      paranoid: false,
    }
  );

  Concept.associate = function (models) {
    Concept.belongsTo(models.Order, {
      foreignKey: "idVenta",
      as: "Recibo",
    });

    Concept.belongsTo(models.Invoice, {
      foreignKey: "idFactura",
      as: "Factura",
    });
  };

  return Concept;
};
