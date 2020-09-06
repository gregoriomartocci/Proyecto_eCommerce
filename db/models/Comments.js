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

    Comments.belongsTo(models.Publication, {
      foreignKey: "idPublicacion",
      as: "Posts",
    });
  };

  return Comments;
};
