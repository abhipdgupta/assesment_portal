const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema(
  {
   
  },
  { timestamps: true }
);

const candidateModel = mongoose.model("candidates", candidateSchema);

module.exports = { candidateModel };
