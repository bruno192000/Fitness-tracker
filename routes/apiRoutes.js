const router = require("express").Router();
const Workout = require("../models/WorkoutSchema");



router.get("/workouts", (req, res) => {
    
    Workout.aggregate(
      ( [
        {
          $addFields: {
            totalDuration: { $sum: "$exercises.duration" } ,
          }
        }
     ] )
    )
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

// addExercise 
router.put("/workouts/:id", (req, res) => {
        

    Workout.updateOne({_id: req.params.id}, {$push: {exercises: [req.body]}})
      .then(dbWorkout => {
        console.log(req.params.id);
          console.log(req.body);
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });


// createWorkout POST

router.post("/workouts", ({body}, res) => {
    Workout.create({body})
      .then(dbWorkout => {
          console.log(dbWorkout);
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

//getWorkouts

router.get("/workouts/range", (req, res) => {
    Workout.aggregate(
      ( [
        {
          $addFields: {
            totalDuration: { $sum: "$exercises.duration" } ,
          }
        }
     ] )
    )
      .then(dbWorkout => {
        console.log(dbWorkout);
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

module.exports = router;
