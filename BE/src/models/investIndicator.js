const mongoose = require("mongoose");

const investIndicatorSchema = new mongoose.Schema({
  totalInput: {
    type: Number,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  theorySet: {
    name: String,
    score: Number,
    people: Number,
  },
  result: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model(
  "InvestIndicator",
  investIndicatorSchema,
  "invest_indicators"
);
