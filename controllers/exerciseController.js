const asyncHandler = require("express-async-handler");
const Exercise = require("../models/Exercise");

// Get all exercises
const getAllExercises = asyncHandler(async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.status(200).json(exercises);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new exercise
const createExercise = asyncHandler(async (req, res) => {
  const { name, time, sets, minReps, maxReps, videoLink, imageLink, isCompleted } = req.body;

  try {
    const newExercise = new Exercise({
      name,
      time,
      sets,
      minReps,
      maxReps,
      videoLink,
      imageLink,
      isCompleted
    });

    const createdExercise = await newExercise.save();
    res.status(201).json(createdExercise);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get an exercise by ID
const getExerciseById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const exercise = await Exercise.findById(id);

    if (!exercise) {
      return res.status(404).json({ message: "Exercise not found" });
    }

    res.status(200).json(exercise);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update an exercise
const updateExercise = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedExercise = await Exercise.findByIdAndUpdate(id, updates, { new: true });

    if (!updatedExercise) {
      return res.status(404).json({ message: "Exercise not found" });
    }

    res.status(200).json(updatedExercise);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete an exercise
const deleteExercise = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const deletedExercise = await Exercise.findByIdAndDelete(id);

    if (!deletedExercise) {
      return res.status(404).json({ message: "Exercise not found" });
    }

    res.status(200).json({ message: "Exercise deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = { getAllExercises, createExercise, getExerciseById, updateExercise, deleteExercise };
