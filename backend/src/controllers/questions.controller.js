const { questionModel } = require("../models/question.model");

const handlePostQuestion = async (req, res, next) => {
  try {
    const newQuestion = await questionModel.create(req.body);
    res.status(201).json(newQuestion);
  } catch (error) {
    console.log("Error in handlePostQuestion");
    throw error;
  }
};

const handleGetAllQuestions = async (req, res, next) => {
  try {
    const questions = await questionModel.find();
    res.status(200).json(questions);
  } catch (error) {
    console.log("Error in handleGetAllQuestions");
    throw error;
  }
};

const handleUpdateQuestionById = async (req, res, next) => {
  try {
    const updatedQuestion = await questionModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedQuestion);
  } catch (error) {
    console.log("Error in handleUpdateQuestionById ");
    throw error;
  }
};
const handleDeleteQuestionById = async (req, res, next) => {
  try {
    const deletedQuestion = await questionModel.findByIdAndDelete(
      req.params.id
    );
    res.status(200).json(deletedQuestion);
  } catch (error) {
    console.log("Error in handleDeleteQuestionById");
    throw error;
  }
};

module.exports = {
  handleDeleteQuestionById,
  handleGetAllQuestions,
  handlePostQuestion,
  handleUpdateQuestionById,
};
