const mongoose = require("mongoose");

const exerciseSchema = mongoose.Schema({
  name: { type: String, required: true },
  time: { type: Number },
  sets: { type: Number },
  minReps: { type: Number },
  maxReps: { type: Number },
  videoLink: { type: String },
  imageLink: { type: String },
  isCompleted: { type: Boolean, default: false }
}, {
  timestamps: true,
});

module.exports = mongoose.model("Exercise", exerciseSchema);
