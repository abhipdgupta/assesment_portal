const { categoryModel } = require("../models/category.model");
const { hashPassword } = require("../utils/bcrypt");

const handlePostCategory = async (req, res, next) => {
  try {
    const newCategory = await categoryModel.create(req.body);
    res.status(201).json(newCategory);
  } catch (error) {
    console.log("Error in handlePostCategory");
    throw error;
  }
};

const handleGetAllCategories = async (req, res, next) => {
  try {
    const categories = await categoryModel.find();
    res.status(200).json(categories);
  } catch (error) {
    console.log("Error in handleGetAllCategories");
    throw error;
  }
};

const handleUpdateCategoryById = async (req, res, next) => {
  try {
    const updatedCategory = await categoryModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedCategory);
  } catch (error) {
    console.log("Error in handleUpdateCategoryById");
    throw error;
  }
};

const handleDeleteCategoryById = async (req, res, next) => {
  try {
    const deletedCategory = await categoryModel.findByIdAndDelete(
      req.params.id
    );
    res.status(200).json(deletedCategory);
  } catch (error) {
    console.log("Error in handleDeleteCategoryById");
    throw error;
  }
};

module.exports = {
  handlePostCategory,
  handleGetAllCategories,
  handleUpdateCategoryById,
  handleDeleteCategoryById,
};
