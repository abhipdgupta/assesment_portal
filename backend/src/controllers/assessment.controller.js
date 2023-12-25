const { categoryModel } = require("../models/category.model");
const { questionModel } = require("../models/question.model");

const handleGetAllQuestions = async (req, res, next) => {
  try {
    // const allQuestions=await questionModel.find({}).select('-correctOption')
    const groupedQuestions = await questionModel.aggregate([
      {
        $project: {
          correctOption: 0,
        },
      },
      {
        $group: {
          _id: "$categoryCode",
          questions: { $push: "$$ROOT" },
        },
      },
    ]);

    res.status(200).json({
      success: true,
      status_code: 200,
      data: groupedQuestions,
    });
  } catch (error) {
    console.log("Error in handleGetAllQuestions", error);
    next(error);
  }
};

const handleGetAllCategories = async (req, res, next) => {
  try {
    const categories = await categoryModel.find({}).select("-_id");
    res.status(200).json({
      success: true,
      status_code: 200,
      data: categories,
    });
  } catch (error) {
    console.log("Error in handleGetAllCategories", error);
    next(error);
  }
};

const handleSubmitTest = async (req, res, next) => {
  try {
    const groupedQuestions = await questionModel.aggregate([
      {
        $project: {
          question: 0,
        },
      },
      {
        $group: {
          _id: "$categoryCode",
          questions: { $push: "$$ROOT" },
        },
      },
    ]);

    const answers = req.body;

    let result = {};

    // Calculate Score
    groupedQuestions.forEach((category) => {
      const categoryCode = category._id;
      const categoryQuestions = category.questions;

      let correctCount = 0;
      let totalQuestions = 0;

      categoryQuestions.forEach((question) => {
        const questionId = question._id;
        const correctOptionIndex = question.correctOption;

        let answer = null;
        answers.forEach((element) => {
          if (categoryCode == element._id) {
            element.questions.forEach((ques) => {
              if (ques._id == questionId) {
                answer = ques;
              }
            });
          }
        });

        if (answer) {
          totalQuestions++;
          if (answer.answered === correctOptionIndex) {
            correctCount++;
          }
        }
      });

      result[categoryCode] = {
        correctCount,
        totalQuestions,
      };
    });



    res.status(200).json({
      message: "successfully submited",
      status_code: 200,
    });
  } catch (error) {
    console.log("Error in handleSubmitTest", error);
    next(error);
  }
};
module.exports = {
  handleGetAllQuestions,
  handleGetAllCategories,
  handleSubmitTest,
};
