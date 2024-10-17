const Item = require("../models/itemModel");

exports.getAllItems = async () => {
  try {
    const items = await Item.findAll();
    return items;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getItemById = async (id) => {
  try {
    const item = await Item.findByPk(id);
    return item;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.addItem = async (item) => {
  try {
    const newItem = await Item.create(item);
    return newItem.id;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.updateItem = async (id, updatedItem) => {
  try {
    const result = await Item.update(updatedItem, {
      where: { id },
    });
    return result[0];
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.deleteItem = async (id) => {
  try {
    const result = await Item.destroy({
      where: { id },
    });
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};
