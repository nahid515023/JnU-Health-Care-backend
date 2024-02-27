const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pinSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  pin: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  }
});

const Pin = mongoose.model("Pin", pinSchema);

module.exports = Pin;