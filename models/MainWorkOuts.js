const mongoose = require("mongoose");

const mainWorkOutsSchema = mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  level: { type: String, required: true },
  targetGender: { type: String, enum: ["Male", "Female"], required: true },
  image: { type: String },
  days: { type: Number, required: true }
}, {
  timestamps: true,
});

module.exports = mongoose.model("MainWorkOuts", mainWorkOutsSchema);
