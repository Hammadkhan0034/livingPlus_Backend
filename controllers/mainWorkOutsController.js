const asyncHandler = require("express-async-handler");
const MainWorkOuts = require("../models/MainWorkOuts");

// Get workouts by gender
const getWorkOutsByGender = asyncHandler(async (req, res) => {
  const { gender } = req.query;

  if (!gender) {
    return res.status(400).json({ message: "Gender is required" });
  }

  if (!["Male", "Female"].includes(gender)) {
    return res.status(400).json({ message: "Invalid gender" });
  }

  try {
    const workOuts = await MainWorkOuts.find({ targetGender: gender });
    res.status(200).json(workOuts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new workout
const createWorkOut = asyncHandler(async (req, res) => {
  const { name, type, level, targetGender, image, days } = req.body;

  try {
    const newWorkOut = new MainWorkOuts({
      name,
      type,
      level,
      targetGender,
      image,
      days
    });

    const createdWorkOut = await newWorkOut.save();
    res.status(201).json(createdWorkOut);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a workout by ID
const getWorkOutById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const workOut = await MainWorkOuts.findById(id);

    if (!workOut) {
      return res.status(404).json({ message: "Workout not found" });
    }

    res.status(200).json(workOut);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a workout
const updateWorkOut = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedWorkOut = await MainWorkOuts.findByIdAndUpdate(id, updates, { new: true });

    if (!updatedWorkOut) {
      return res.status(404).json({ message: "Workout not found" });
    }

    res.status(200).json(updatedWorkOut);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a workout
const deleteWorkOut = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const deletedWorkOut = await MainWorkOuts.findByIdAndDelete(id);

    if (!deletedWorkOut) {
      return res.status(404).json({ message: "Workout not found" });
    }

    res.status(200).json({ message: "Workout deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = { getWorkOutsByGender, createWorkOut, getWorkOutById, updateWorkOut, deleteWorkOut };
