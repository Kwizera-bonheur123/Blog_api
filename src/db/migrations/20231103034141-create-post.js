'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      },
      authorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
     
      },
      postImage: {
        type: Sequelize.STRING,
        allowNull: false
      },
      comments: {
        type: Sequelize.INTEGER,
        allowNull: true,
      
      },      
    views: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue:0
    },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Posts');
  }
};