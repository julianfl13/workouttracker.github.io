const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutsSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter workout"
  },
  value: {
    type: Number,
    required: "Enter amount of weight"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Workouts = mongoose.model("Workouts", workoutsSchema);

module.exports = Transaction;