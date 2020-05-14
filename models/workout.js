const mongoose = require("mongoose"); 

const Schema = mongoose.Schema; 

const workoutSchema = new Schema({

    Type: {
        type: String, 
        trim: true, 
        required: "Enter a type of workout"
    }, 
    Date: {
        type: Date, 
        default: Date.now, 
        required: "Enter a date for the workout"
    }, 
    Distance: {
        type: Number 
    }, 
    Duration: {
        type: Number
    }, 
    Weight: {
        type: Number
    }, 
    Sets: {
        type: Number
    },
    Reps: {
        type: Number
    } 
}); 

const Workout = mongoose.model("Workout", workoutSchema); 

module.exports = Workout; 