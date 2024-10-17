const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db/shopping-list.db", // Path to your SQLite database
});

module.exports = sequelize;
