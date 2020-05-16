const mongoose = require("mongoose"); 

const Schema = mongoose.Schema; 

const workoutSchema = new Schema({

    day: {
        type: Date, 
        default: new Date() 
    },

    exercises: [{
    type: {
        type: String, 
        trim: true, 
        required: "Enter a type of workout"
    }, 
   name: {
        type: String, 
        trim: true, 
        required: "Enter a name for the exercise" 
        
    }, 
    duration: {
        type: Number,
        required: "Enter an exercise duration"
    },
    weight: {
        type: Number
    },
    sets: {
        type: Number
    },
    reps: {
        type: Number
    }, 
    
    distance: {
        type: Number 
    }
}]
}); 

const workout = mongoose.model("Workout", workoutSchema); 

module.exports = workout; 