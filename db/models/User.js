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
        validate: {
          len: [3, 100],
        },
      },
      password: {
        type: dataTypes.STRING(),
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
        type: dataTypes.STRING(100),
        allowNull: true,
      },
      nivel: {
        type: dataTypes.INTEGER(5),
        allowNull: true,
      },
    },
    {
      tableName: "usuarios",
      timestamps: true,
      paranoid: true,
    }
  );

  User.associate = function (models) {
    User.belongsTo(models.Cart, {
      foreignKey: "idCarrito",
      as: "Cart",
    });

    User.belongsToMany(models.Invoice, {
      as: "Facturacion",
      through: "usuariofactura",
      foreignKey: "idUsuario",
      otherKey: "idFactura",
      timestamps: false,
    });
  };

  return User;
};
