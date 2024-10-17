const express = require("express");
const itemController = require("../controllers/itemController");
const { handleRoute } = require("../utils/errorHandler");

const router = express.Router();

router.get(
  "/",
  handleRoute(async (req, res) => {
    const items = await itemController.getAllItems();
    res.json(items);
  })
);

router.get(
  "/:id",
  handleRoute(async (req, res) => {
    const item = await itemController.getItemById(req.params.id);
    if (!item) return res.status(404).json({ error: "Item not found" });
    res.json(item);
  })
);

router.post(
  "/",
  handleRoute(async (req, res) => {
    const itemId = await itemController.addItem(req.body);
    res.status(201).json({ id: itemId });
  })
);

router.put(
  "/:id",
  handleRoute(async (req, res) => {
    const changes = await itemController.updateItem(req.params.id, req.body);
    if (changes === 0) return res.status(404).json({ error: "Item not found" });
    res.json({ message: "Item updated successfully" });
  })
);

router.delete(
  "/:id",
  handleRoute(async (req, res) => {
    const changes = await itemController.deleteItem(req.params.id);
    if (changes === 0) return res.status(404).json({ error: "Item not found" });
    res.json({ message: "Item deleted successfully" });
  })
);

module.exports = router;
