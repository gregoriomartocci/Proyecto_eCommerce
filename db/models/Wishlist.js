module.exports = function (sequelize, dataTypes) {
  let Wishlist = sequelize.define(
    "Wishlist",
    {
      idItem: {
        type: dataTypes.INTEGER(5),
        primaryKey: true,
      }
    },
    {
      tableName: "wishlist",
      timestamps: true,
      paranoid: false,
    }
  );

  Wishlist.associate = function (models) {
    Wishlist.belongsToMany(models.User, {
      as: "Wishlist",
      through: "userWishlist",
      foreignKey: "idWishlist",
      otherKey: "idUser",
      timestamps: true,
    });

    Wishlist.belongsTo(models.Publication, {
      foreignKey: "idPublicacion",
      as: "items",
    });
  };

  return Wishlist;
};
