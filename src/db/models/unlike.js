'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UnLike extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UnLike.belongsTo(models.User,{
        as: 'author',
        foreignKey: 'authorId',
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      })
    }
  }
  UnLike.init({
    authorId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UnLikes',
  });
  return UnLike;
};