"use strict";
const faker = require("faker");
module.exports = {
  up: (queryInterface, Sequelize) => {
    function generatePost() {
      let users = [];

      for (let id = 1; id < 1000; id++) {
        let title = faker.lorem.words(5);
        let description = faker.lorem.paragraph();
        let userId = Math.floor(Math.random() * 100) + 1;

        users.push({
          id,
          title,
          description,
          userId,
          createdAt: new Date(),
          updatedAt: new Date()
        });
      }
      return users;
    }

    return queryInterface.bulkInsert("posts", generatePost());
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("posts", null, {});
  }
};
