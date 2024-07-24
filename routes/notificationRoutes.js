const express = require("express");
const notificationController = require("../controllers/notificationController");

const router = express.Router();

router.get("/", notificationController.getAllNotifications);
router.post("/", notificationController.createNotification);
router.get("/:id", notificationController.getNotificationById);
router.put("/:id", notificationController.updateNotification);
router.delete("/:id", notificationController.deleteNotification);

module.exports = router;
