import { WORKOUT_ACTIONS } from '../utilities/constants';
import update from 'immutability-helper';

const defaultState = {
  workouts: [],
};

export const workoutData = (state=defaultState, action) => {
  switch(action.type) {
    case WORKOUT_ACTIONS.addWorkoutSuccess:
      return addNewWorkout(state, action.payload);
    case WORKOUT_ACTIONS.fetchWorkoutsSuccess:
      return updateWorkoutList(state, action.payload);
    default:
      return state;
  }
};

const addNewWorkout = (state, newWorkout) => {
  return update(state, {
    workouts: { $push: [newWorkout] }
  });
};


const updateWorkoutList = (state, payload) => {
  return update(state, {
    workouts: { $push: payload }
  });
}
