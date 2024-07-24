const mongoose = require("mongoose");
const Exercise = require('./Exercise'); // Adjust the path as needed
const Schema = mongoose.Schema; 
const workoutsSchema = mongoose.Schema({
  name: { type: String, required: true },
  day: { type: Number, required: true },
  estTime: { type: Number, required: true },
  exercises: [ { type: Schema.Types.ObjectId, ref: 'Exercise' } ], // List of exercises
  workouts: { type: Number, required: true },
  isCompleted: { type: Boolean, default: false }
}, {
  timestamps: true,
});

module.exports = mongoose.model("Workouts", workoutsSchema);
