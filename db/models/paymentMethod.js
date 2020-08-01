module.exports = function (sequelize, dataTypes) {
  let paymentMethod = sequelize.define(
    "paymentMethod",
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

  return paymentMethod;
};
