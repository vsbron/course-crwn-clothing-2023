import { createContext, useEffect, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

// Actual value you want to access (need to be filled with default value)
export const UserContext = createContext({
  currentUser: null,            // Empty (default) user
  setCurrentUser: () => null,   // Empty (default) function
});

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
const userReducer = ( state, action ) => {

  // Destructuring action to a type [string] and optional payload [anything]
  const { type, payload } = action;

  // Using the switch statement to give deifferent outcomes based on the type we got from action object
  switch(type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER: return {
      ...state,                 // Returns the object with all the previous values
      currentUser: payload }    // Updating the modified one which is currentUser object
    default: throw new Error(`Unhandled type ${type} in userRedcuer`)   // If no case matched, throw Error
  }
}

// Actual component that wraps the component that needs to access the value inside the context
// Will rerun once setState / dispatch functions are called and the state is updated in the reducer
export const UserProvider = ( { children } ) => {

  // Initialising the reducer with the useReducer hook that takes our reducer and the initial value of the state we initialized previously
  const [ { currentUser }, dispatch ] = useReducer(userReducer, INITIAL_STATE);   // We get back the current state (destructured) and the dispatch function

  // Defining the setter for the user in the state
  const setCurrentUser = (user) => {
    // Passing the action object to the dispatch function that will run it through the switch statement written above
    dispatch( createAction( USER_ACTION_TYPES.SET_CURRENT_USER, user));
  }

  // Passing the state variables to the value that goes to the context provider
  const value = { currentUser, setCurrentUser };    

  useEffect( () => {
    // Initiate the listener that will listen constantly for auth state change (Log in / Log out)
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);   // Create the user document if user logged in
      };
      setCurrentUser(user);                 // If not, set the new user (logged in or null)
    } );
    return unsubscribe                      // Unsubscribe the listener once the component unmounts
  }, [] );

  // Returning the context provider with the value that will be stored in the context with all the variables
  return <UserContext.Provider value={ value }>{ children }</UserContext.Provider>
}