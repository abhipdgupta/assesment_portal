const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  options: [
    {
      type: String,
    },
  ],
  correctOption: {
    type: Number,
    required: true,
  },
  categoryCode: {
    type:Number,
    required: true,
  },
},{timestamps:true});

const questionModel = mongoose.model("questions", questionSchema);

module.exports = { questionModel };
