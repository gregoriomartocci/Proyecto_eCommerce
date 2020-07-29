module.exports = function (sequelize, dataTypes) {
  let User = sequelize.define(
    "User",
    {
      idUsuario: {
        type: dataTypes.INTEGER(6),
        primaryKey: true,
        allowNull: false,
      },
      username: {
        type: dataTypes.STRING(45),
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
    },
    {
      tableName: "usuario",
      timestamps: "true",
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
    }
  );

  return User;
};
