module.exports = function (sequelize, dataTypes) {
  let PaymentMethod = sequelize.define(
    "PaymentMethod",
    {
      idmedioPago: {
        type: dataTypes.INTEGER(11),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      medio: {
        type: dataTypes.STRING(45),
      },
    },
    {
      tableName: "mediopago",
      timestamps: false,
    }
  );

  return PaymentMethod;
};
