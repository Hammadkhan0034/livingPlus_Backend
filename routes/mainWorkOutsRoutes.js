const express = require("express");
const mainWorkOutsController = require("../controllers/mainWorkOutsController");

const router = express.Router();

router.get("/", mainWorkOutsController.getWorkOutsByGender);
router.post("/", mainWorkOutsController.createWorkOut);
router.get("/:id", mainWorkOutsController.getWorkOutById);
router.put("/:id", mainWorkOutsController.updateWorkOut);
router.delete("/:id", mainWorkOutsController.deleteWorkOut);

module.exports = router;
