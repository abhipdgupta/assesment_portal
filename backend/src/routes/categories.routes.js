const express = require("express");
const {
  handlePostCategory,
  handleGetAllCategories,
  handleUpdateCategoryById,
  handleDeleteCategoryById,
} = require("../controllers/categories.controller");

const router = express.Router();

router.post("/", handlePostCategory);

router.get("/", handleGetAllCategories);

router.put("/:id", handleUpdateCategoryById);

router.delete("/:id", handleDeleteCategoryById);

module.exports = router;
