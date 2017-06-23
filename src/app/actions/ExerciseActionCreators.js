import { EXERCISE_ACTIONS } from '../utilities/constants';

export const toggleExerciseModal = (displayState) => ({
  type: EXERCISE_ACTIONS.closeModal,
  payload: displayState
});
