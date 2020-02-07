"use strict";
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      userId: DataTypes.NUMBER
    },
    {}
  );
  Post.associate = function(models) {
    // Post.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Post;
};
