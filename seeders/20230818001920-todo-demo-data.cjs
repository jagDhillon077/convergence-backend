'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkDelete("user", null, {})
    await queryInterface.bulkDelete("todoItem", null, {})

    await queryInterface.bulkInsert('todoItem', [{
      title: "Finish report",
      category: "Work",
      description: "Compile data and complete the annual report.",
      ownerId: 1,
      todoId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Clean the garage",
      category: "Home",
      description: "Organize tools and get rid of unused items.",
      ownerId: 2,
      todoId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
      
    },
    {
      title: "Morning jog",
      category: "Exercise",
      description: "Run 5k around the neighborhood.",
      ownerId: 3,
      todoId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Team meeting",
      category: "Work",
      description: "Discuss the new project proposal with the team.",
      ownerId: 1,
      todoId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Fix the kitchen sink",
      category: "Home",
      description: "The tap has been leaking for a week.",
      ownerId: 2,
      todoId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Attend yoga class",
      category: "Exercise",
      description: "Evening yoga class at the community center.",
      ownerId: 3,
      todoId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

    await queryInterface.bulkInsert('user', [{
      username: "Sally",
      password: "secret",
      ownerId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: "James",
      password: "secret",
      ownerId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: "Anthony",
      password: "secret",
      ownerId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("user", null, {})
    await queryInterface.bulkDelete("todoItem", null, {})
  }
};
