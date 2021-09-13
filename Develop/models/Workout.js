const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },

  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: 'Select exercise.',
      },
    
      name: {
        type: String
      },
    
      duration: {
        type: Number,
        required: 'duration ',
      },

      distance: {
        type: Number,
        required: 'distance',
      },
    
      weight: {
        type: Number,
        required: 'weight ',
      },
    
      reps: {
        type: Number,
        required: 'reps.',
      },
    
      sets: {
        type: Number,
        required: 'sets.',
      }
    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;