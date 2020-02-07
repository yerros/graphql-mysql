"use strict";
const faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    function generateUser() {
      let users = [];

      for (let id = 1; id < 100; id++) {
        let firstName = faker.name.firstName();
        let lastName = faker.name.lastName();
        let email = faker.internet.email();

        users.push({
          id,
          firstName,
          lastName,
          email,
          createdAt: new Date(),
          updatedAt: new Date()
        });
      }
      return users;
    }
    return queryInterface.bulkInsert("users", generateUser());
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("users", null, {});
  }
};
