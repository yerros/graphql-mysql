const faker = require("faker");

function generatePost() {
  let users = [];

  for (let id = 1; id < 10; id++) {
    let title = faker.lorem.words(5);
    let desciption = faker.lorem.paragraph();
    let userId = Math.floor(Math.random() * 100);

    users.push({
      id,
      title,
      desciption,
      userId,
      createdAt: new Date(),
      updatedAt: new Date()
    });
  }
  return users;
}

let user = generateUser();
console.log(user);
