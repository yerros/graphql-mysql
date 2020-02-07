require("dotenv").config();

const Sequelize = require("sequelize");

const database = process.env.DATABASE;
const username = process.env.DB_USER;
const password = process.env.DB_PASS;

console.log(database, username, password);
let db = {};

const sequelize = new Sequelize(database, username, password, {
  host: process.env.DB_HOST,
  dialect: process.env.dialect
});

let models = [require("../models/post"), require("../models/user")];

models.forEach(model => {
  const seqModel = model(sequelize, Sequelize);
  db[seqModel.name] = seqModel;
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
