import { CATEGORIES_ACTION_TYPES } from "./category.types";

export const CATEGORIES_INITIAL_STATE = { 
  categories: [],     // Categories array
  isLoading: false,   // isLoading state
  error: null,        // Error message
}

// REDUCER: Creating the reducer which takes the state and the action
// State is used is when you need to keep track of previous values and increment/decrement something for example
// *In REDUX we need to initiate the state because originally it took it from useReducer hook that we don't have here
export const categoriesReducer = ( state = CATEGORIES_INITIAL_STATE, action = {}) => {

  // Destructuring action to a type [string] and optional payload [anything]
  const { type, payload } = action;
  
  // Using the switch statement to give different outcomes based on the type we got from action object
  switch(type) {

    // Fetching process has started
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START: return {
      ...state,               // Return the object with all previous values
      isLoading: true,        // Set isLoading state to true
    };

    // Fetching process completed successfully
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS: return {
      ...state,               // Returns the object with all the previous values
      categories: payload,    // Updating the modified one which is categories object
      isLoading: false,       // Set isLoading state to false
    };

    // Fetching process failed
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED: return {
      ...state,               // Returns the object with all the previous values
      error: payload,         // Set the payload to the error variable
      isLoading: false,       // Set isLoading state to false
    };

    // *In REDUX, instead of throwing an Error by default we need to return the state.
    // Because there's one dispatch for all reducers, it can match the case in different reducer
    default: return state;
  }
}