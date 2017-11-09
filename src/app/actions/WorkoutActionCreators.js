import { EXERCISE_ACTIONS, WORKOUT_ACTIONS } from '../utilities/constants';
import {
  addWorkout as addWorkoutAPI,
  loadWorkouts as loadWorkoutsAPI,
 } from '../utilities/api';



const triggerFetchWorkouts = () => ({
  type: WORKOUT_ACTIONS.fetchWorkoutsRequest
});

const triggerAddWorkout = () => ({
  type: WORKOUT_ACTIONS.addWorkoutRequest
});


export const addWorkout = (workoutName) => {
  const workoutData = JSON.stringify({ name: workoutName });

  return (dispatch) => {
    triggerAddWorkout();
    addWorkoutAPI(workoutData)
      .then(payload => dispatch({ type: WORKOUT_ACTIONS.addWorkoutSuccess,  payload }));
  };
}

export const loadWorkouts = () => {
  return (dispatch) => {
    triggerFetchWorkouts();
    loadWorkoutsAPI()
      .then(payload => dispatch({ type: WORKOUT_ACTIONS.fetchWorkoutsSuccess, payload }))
  }
}
