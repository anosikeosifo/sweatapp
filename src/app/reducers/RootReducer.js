import { combineReducers, applyMiddleWare } from 'redux';
import thunk from 'redux-thunk';
import { exerciseData } from './ExerciseReducer';
import { userData } from './UserReducer';
import { workoutData } from './WorkoutReducer';

export const rootReducer = combineReducers({
  exerciseData,
  userData,
  workoutData,
});
