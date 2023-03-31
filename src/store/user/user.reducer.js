// REDUCER: Setting the action types string
export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER"
}

// REDUCER: Setting the initial state for the current user (null)
const INITIAL_STATE = {
  currentUser: null
};

// REDUCER: Creating the reducer which takes the state and the action
// State is used is when you need to keep track of previous values and increment/decrement something for example
// *In REDUX we need to initiate the state because originally it took it from useReducer hook that we don't have here
const userReducer = ( state = INITIAL_STATE, action ) => {

  // Destructuring action to a type [string] and optional payload [anything]
  const { type, payload } = action;

  // Using the switch statement to give deifferent outcomes based on the type we got from action object
  switch(type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER: return {
      ...state,                 // Returns the object with all the previous values
      currentUser: payload }    // Updating the modified one which is currentUser object

    // *In REDUX, instead of throwing an Error by default we need to return the state.
    // Because there's one dispatch for all reducers, it can match the case in different reducer
    default: return state;
  }
}