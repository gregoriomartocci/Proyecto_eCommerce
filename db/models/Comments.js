module.exports = function (sequelize, dataTypes) {
  let Comments = sequelize.define(
    "Comments",
    {
      idComentario: {
        type: dataTypes.INTEGER(6),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      comentario: {
        type: dataTypes.TEXT,
      },
    },
    {
      tableName: "comentarios",
      timestamps: true,
      paranoid: true,
    }
  );

  Comments.associate = function (models) {
    Comments.belongsToMany(models.User, {
      through: "usercomments",
      as: "Comentarios",
      foreignKey: "idComentario",
      otherKey: "idUsuario",
      timestamps: true,
    });

    Comments.belongsToMany(models.Publication, {
      through: "publicationcomments",
      as: "Review",
      foreignKey: "idComentario",
      otherKey: "idPublicacion",
      timestamps: true,
    });
  };

  return Comments;
};
