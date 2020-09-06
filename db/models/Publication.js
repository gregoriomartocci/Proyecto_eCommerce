module.exports = function (sequelize, dataTypes) {
  let Publication = sequelize.define(
    "Publication",
    {
      idPublicacion: {
        type: dataTypes.INTEGER(11),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      descuento: {
        type: dataTypes.DECIMAL,
      },
      estado: {
        type: dataTypes.BOOLEAN,
      },
      stock: {
        type: dataTypes.INTEGER,
      },
      garantia: {
        type: dataTypes.TEXT,
        allowNull: true,
      },
      envio: {
        type: dataTypes.DECIMAL,
        allowNull: true,
      },
    },
    {
      tableName: "publicacion",
      timeStamps: true,
      paranoid: true,
    }
  );

  Publication.associate = function (models) {
    Publication.belongsToMany(models.Comments, {
      through: "publicationcomments",
      as: "posteos",
      foreignKey: "idPublicacion",
      otherKey: "idComentario",
      timestamps: true,
    });

    Publication.belongsTo(models.User, {
      foreignKey: "idUsuario",
      as: "Publicaciones",
    });

    Publication.belongsTo(models.Product, {
      foreignKey: "idProducto",
      as: "product",
    });
  };

  return Publication;
};
