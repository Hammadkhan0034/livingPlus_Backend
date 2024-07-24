const express = require("express");
const workOutsController = require("../controllers/workoutsController");


const router = express.Router();

router.get("/", workOutsController.getAllWorkouts);
router.post("/", workOutsController.createWorkout);
router.get("/:id", workOutsController.getWorkoutById);
router.put("/:id", workOutsController.updateWorkout);
router.delete("/:id", workOutsController.deleteWorkout);

module.exports = router;
