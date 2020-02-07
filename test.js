const faker = require("faker");

function generateUser() {
  let users = [];

  for (let id = 1; id < 10; id++) {
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

let user = generateUser();
console.log(user);
