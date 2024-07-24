const asyncHandler = require("express-async-handler");
const Workouts = require("../models/Workouts");

// Get all workouts
const getAllWorkouts = asyncHandler(async (req, res) => {
  try {
    const workouts = await Workouts.find();
    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new workout
const createWorkout = asyncHandler(async (req, res) => {
  const { name, day, estTime, exercises, workouts, isCompleted } = req.body;

  try {
    const newWorkout = new Workouts({
      name,
      day,
      estTime,
      exercises,
      workouts,
      isCompleted
    });

    const createdWorkout = await newWorkout.save();
    res.status(201).json(createdWorkout);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a workout by ID
const getWorkoutById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const workout = await Workouts.findById(id);

    if (!workout) {
      return res.status(404).json({ message: "Workout not found" });
    }

    res.status(200).json(workout);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a workout
const updateWorkout = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedWorkout = await Workouts.findByIdAndUpdate(id, updates, { new: true });

    if (!updatedWorkout) {
      return res.status(404).json({ message: "Workout not found" });
    }

    res.status(200).json(updatedWorkout);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a workout
const deleteWorkout = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const deletedWorkout = await Workouts.findByIdAndDelete(id);

    if (!deletedWorkout) {
      return res.status(404).json({ message: "Workout not found" });
    }

    res.status(200).json({ message: "Workout deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = { getAllWorkouts, createWorkout, getWorkoutById, updateWorkout, deleteWorkout };
