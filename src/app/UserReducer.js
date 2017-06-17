const START_WORKOUT = 'Start workout';


const  userState = [];
export const userData = (initialState = userState, action) => {
  switch (action.type) {
    case START_WORKOUT:
      return userState
      break;
    default:
      return userState;
  }
}
