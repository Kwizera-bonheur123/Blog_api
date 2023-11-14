'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = [
      {
        title: 'First Post',
        content: 'This is the content of the first post.',
        authorId: 1, // Replace with the actual author ID
        postImage: 'image1.jpg',
        views: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Second Post',
        content: 'This is the content of the second post.',
        authorId: 2, // Replace with the actual author ID
        postImage: 'image2.jpg',
        views: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more posts as needed
    ];

    await queryInterface.bulkInsert('Posts', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Posts', null, {});
  },
};
