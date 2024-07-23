const express = require('express')
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')


const router = express.Router()

//GET all workouts
router.get('/', getWorkouts)

//GET Single wokrouts
router.get('/:id', getWorkout)

//POST new workout
router.post('/', createWorkout)

//Delete Workout
router.delete('/:id', deleteWorkout)

//UPDATE workout
router.patch('/:id', updateWorkout)

module.exports = router