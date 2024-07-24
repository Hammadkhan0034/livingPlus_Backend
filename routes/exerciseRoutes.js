const express = require("express");
const exerciseController = require("../controllers/exerciseController");
const router = express.Router();

router.get("/", exerciseController.getAllExercises);
router.post("/", exerciseController.createExercise);
router.get("/:id", exerciseController.getExerciseById);
router.put("/:id", exerciseController.updateExercise);
router.delete("/:id", exerciseController.deleteExercise);
//
module.exports = router;
