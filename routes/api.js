const router = require("express").Router(); 
const path = require("path"); 
const workout = require("../models/workout.js"); 

router.post("/api/workouts", (req, res) => {
    console.log(req.body)
    workout.create({})
    .then(dbWorkout => {
        console.log(dbWorkout)
        res.json(dbWorkout)
    }).catch(err => {
        res.status(400).json(err); 
    })
})

router.put("/api/workouts/:id", (req,res) => {
    console.log("here")
    workout.findByIdAndUpdate(req.params.id,
        { $push: { Exercises: req.body } },
        // "runValidators" will ensure new exercises meet our schema requirements
        { new: true, runValidators: true })
    .then(dbWorkout => {
        res.json(dbWorkout)
    }).catch(err => {
        res.status(400).json(err); 
    })
    
})

router.get("/exercise", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html")); 
}); 

router.get("/api/workouts", (req,res) => {
    workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout)
    }).catch(err => {
        res.status(400).json(err)
    })
})
module.exports = router; 