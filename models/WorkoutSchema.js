const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    unique: true,
    default: Date.now,
  },
  exercises: [
    {      
        _id: false,

      type: {
        type: String,
        required: "Workout type is required"
    },
      name: {
        type: String,
        trim: true,
        required: "Workout name is required"

      },
      duration: {
        type: Number,
        trim: true,
        required: "Duration is required"
      },

      distance:{
        type: Number,
        trim: true,
        required: "Distance is required" 
      },


      weight: {
        type: Number,
        trim: true,
        required: "A number for weight is required"

      },
      reps: {
        type: Number,
        trim: true,
        required: "A number of reps is required"

      },

      sets: {
        type: Number,
        trim: true,
        required: "Number of sets is required",
      },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
