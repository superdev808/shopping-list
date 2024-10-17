const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Item = sequelize.define("Item", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  purchased: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

// Sync the model with the database
sequelize.sync();

module.exports = Item;
