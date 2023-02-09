const { Schema } = require("mongoose");

const PlanSchema = new Schema({
  title: { type: String, required: true },
  date: { type: Date, default: Date.now },
  writer: String,
  content: String,
});

module.exports = PlanSchema;
