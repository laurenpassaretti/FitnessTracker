const router = require("express").Router(); 
const path = require("path"); 
const Workout = require("../models/workout.js"); 

router.post("/api/workouts", (req, res) => {
    Workout.create(req.body)
    .then(dbWorkout => {
        res.json(dbWorkout)
    }).catch(err => {
        res.status(400).json(err); 
    })
})

router.put("/api/workouts/:id", (req,res) => {
    Workout.findByIdAndUpdate(req.params.id, req.body)
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
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout)
    }).catch(err => {
        res.status(400).json(err)
    })
})
module.exports = router; 