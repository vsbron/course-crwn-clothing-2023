import { USER_ACTION_TYPES } from "./user.types";

// REDUCER: Setting the initial state for the current user (null), isLoading (false) and error (null)
const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

// REDUCER: Creating the reducer which takes the state and the action
// State is used is when you need to keep track of previous values and increment/decrement something for example
// *In REDUX we need to initiate the state because originally it took it from useReducer hook that we don't have here
export const userReducer = ( state = INITIAL_STATE, action ) => {

  // Destructuring action to a type [string] and optional payload [anything]
  const { type, payload } = action;

  // Using the switch statement to give different outcomes based on the type we got from action object
  switch(type) {
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS: return {    // If success
      ...state,                 // Returns the object with all the previous values
      currentUser: payload }    // Updating the modified one which is currentUser object

    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:            // If sign out successes
      return { ...state, currentUser: null };           // set the currentUser to null

    case USER_ACTION_TYPES.SIGN_OUT_FAILED:             // If Sign Out failed
    case USER_ACTION_TYPES.SIGN_IN_FAILED:              // If Sign In failed
    case USER_ACTION_TYPES.SIGN_UP_FAILED: return {     // If Sign Up failed
      ...state,                 // Returns the object with all the previous values
      error: payload }          // Updating the modified one which is error message

    // *In REDUX, instead of throwing an Error by default we need to return the state.
    // Because there's one dispatch for all reducers, it can match the case in different reducer
    default: return state;
  }
}