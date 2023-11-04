'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     Post.belongsTo(models.User,{
      as: 'author',
      foreignKey: 'authorId'
     })
     Post.hasMany(models.Comment, {
      as:'comments',
      foreignKey:'postId',
      onDelete:'CASCADE',
      onUpdate:'CASCADE'
     })
    }
  }
  Post.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    authorId: DataTypes.INTEGER,
    postImage: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};