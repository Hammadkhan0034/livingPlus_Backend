const mongoose = require("mongoose");

const notificationSchema = mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
}, {
  timestamps: true,
});

module.exports = mongoose.model("Notification", notificationSchema);
