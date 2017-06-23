import { combineReducers, applyMiddleWare } from 'redux';
import thunk from 'redux-thunk';
import { exerciseData } from './ExerciseReducer';
import { userData } from './UserReducer';

export const rootReducer = combineReducers({
  exerciseData,
  userData,
});
