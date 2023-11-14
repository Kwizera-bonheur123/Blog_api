'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = [
      {
        postId: 1, // Replace with the actual post ID
        content: 'This is a comment on the first post.',
        authorId: 1, // Replace with the actual author ID
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        postId: 2, // Replace with the actual post ID
        content: 'This is a comment on the second post.',
        authorId: 2, // Replace with the actual author ID
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more comments as needed
    ];

    await queryInterface.bulkInsert('Comments', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Comments', null, {});
  },
};
