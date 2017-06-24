import { EXERCISE_ACTIONS, WORKOUT_ACTIONS } from '../utilities/constants';
import { loadExercises as loadExercisesAPI } from '../utilities/api';


const triggerFetchExercises = () => ({
  type: EXERCISE_ACTIONS.fetchExercisesRequest
});

export const toggleExerciseModal = (displayState) => ({
  type: EXERCISE_ACTIONS.closeModal,
  payload: displayState
});

export const loadExercises = () => {
  return (dispatch) => {
    triggerFetchExercises();
    loadExercisesAPI()
      .then(payload => dispatch({ type: EXERCISE_ACTIONS.fetchExercisesSuccess, payload }))
  }
}
