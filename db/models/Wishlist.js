module.exports = function (sequelize, dataTypes) {
  let Wishlist = sequelize.define(
    "Wishlist",
    {
      idItem: {
        type: dataTypes.INTEGER(5),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
    },
    {
      tableName: "wishlist",
      timestamps: true,
      paranoid: false,
    }
  );

  Wishlist.associate = function (models) {
    Wishlist.belongsTo(models.User, {
      through: "userwishlist",
      as: "Wishlist",
      foreignKey: "idWishlist",
      otherKey: "idUsuario",
      timestamps: false,
    });

    Wishlist.belongsTo(models.Publication, {
      foreignKey: "idPublicacion",
      as: "items",
    });
  };

  return Wishlist;
};
