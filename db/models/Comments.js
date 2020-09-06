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
      as: "posts",
      foreignKey: "idComentario",
      otherKey: "idUsuario",
      timestamps: false,
    });

    Comments.belongsToMany(models.Publication, {
      through: "publicationcomments",
      as: "comentarios",
      foreignKey: "idComentario",
      otherKey: "idPublicacion",
      timestamps: false,
    });
  };

  return Comments;
};
