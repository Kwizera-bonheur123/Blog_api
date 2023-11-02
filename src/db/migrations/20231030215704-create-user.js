'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
      },
      lastName: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      profile: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.ENUM('user', 'admin'),
        defaultValue: 'user',
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

    await queryInterface.createTable('comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      postId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'post',
          key: 'id',
        },
      },      
      content: {
        type: Sequelize.STRING
      },
      author: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model:"Users",
          key:"id"
        }
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
    
    await queryInterface.createTable('post', {
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
      author: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model:"Users",
          key:"id"
        }
      },
      postImage: {
        type: Sequelize.STRING,
        allowNull: false
      },
      comments: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'comments',
          key: 'id',
        },
      },      
    views: {
      type: Sequelize.INTEGER,
      allowNull: false
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
    await queryInterface.dropTable('Users');
  }
};