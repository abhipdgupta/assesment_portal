const express = require("express");
const {
  handlePostQuestion,
  handleGetAllQuestions,
  handleUpdateQuestionById,
  handleDeleteQuestionById,
} = require("../controllers/questions.controller");

const router = express.Router();

router.post("/", handlePostQuestion);

router.get("/", handleGetAllQuestions);

router.put("/:id", handleUpdateQuestionById);

router.delete("/:id", handleDeleteQuestionById);

module.exports = router;
