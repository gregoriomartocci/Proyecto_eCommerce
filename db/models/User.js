module.exports = function (sequelize, dataTypes) {
  let User = sequelize.define(
    "User",
    {
      idUsuario: {
        type: dataTypes.INTEGER(6),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      email: {
        type: dataTypes.STRING(50),
      },
      password: {
        type: dataTypes.STRING(45),
      },
      nombre: {
        type: dataTypes.STRING(45),
        allowNull: true,
      },
      apellido: {
        type: dataTypes.STRING(45),
        allowNull: true,
      },
      avatar: {
        type: dataTypes.STRING(45),
        allowNull: true,
      },
      nivel: {
        type: dataTypes.INTEGER(5),
        allowNull: true,
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
      tableName: "usuarios",
      timestamps: "true",
      paranoid:"true"
    }
  );

  return User;
};
