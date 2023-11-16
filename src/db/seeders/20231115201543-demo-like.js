'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Seed data for the Likes table
    const likesData = [
      {
        authorId: 1, // Replace with an existing User ID
        postId: 1,   // Replace with an existing Post ID
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more seed data as needed
    ];

    // Insert seed data into the Likes table
    await queryInterface.bulkInsert('Likes', likesData, {});
  },

  down: async (queryInterface, Sequelize) => {
    // Remove all records from the Likes table during rollback
    await queryInterface.bulkDelete('Likes', null, {});
  },
};
