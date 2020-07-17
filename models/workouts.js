const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutsSchema = new Schema(
  {  date: {
    type: Date,
    default: Date.now
  },
  exercises:[{
  name: {
    type: String,
    trim: true,
    required: "Enter workout"
  },
  time:{
    type: Number,
    required:"How long was the workout"
  },
  value: {
    type: Number,
    required: "Enter amount of weight"
  },
  weight:{
    type: Number
  },
  reps:{
    type: Number
  },
  sets:{
    type: Number
  }
}
]
},{toJSON:{
  virtuals:true
}
}
);
workoutsSchema.virtual("totalTime").get(function(){
  return this.exercises.reduce((total, exercises) => {
    return total + exercises.time;
  },0);
});
const Workouts = mongoose.model("Workouts", workoutsSchema);

module.exports = Transaction;