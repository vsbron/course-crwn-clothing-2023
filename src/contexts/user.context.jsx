import { createContext, useEffect, useReducer } from "react";

import { createAction } from "../utils/reducer/reducer.utils";

import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

// Actual value you want to access (need to be filled with default value)
export const UserContext = createContext({
  currentUser: null,            // Empty (default) user
  setCurrentUser: () => null,   // Empty (default) function
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER"
}

const INITIAL_STATE = {
  currentUser: null
};

// Creating the reducer which takes the state and the action
const userReducer = ( state, action ) => {
  const { type, payload } = action;   // Destructuring action to a type [string] and payload [anything]

  switch(type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER: return {
      ...state,                 // Returning all the previous values
      currentUser: payload }    // Updating the modified one
    default: throw new Error(`Unhandled type ${type} in userRedcuer`)   // If no case matched, throw Error
  }
}

// Actual component that wraps the component that needs to access the value inside the context
export const UserProvider = ( { children } ) => {

  const [ { currentUser }, dispatch ] = useReducer(userReducer, INITIAL_STATE);   // Initializing useReducer

  // Defining the setter for the user in the state
  const setCurrentUser = (user) => {
    dispatch( createAction( USER_ACTION_TYPES.SET_CURRENT_USER, user));
  }

  const value = { currentUser, setCurrentUser };    // Passing the state variables to the value that goes to the context provider

  useEffect( () => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if(user) {
        createUserDocumentFromAuth(user);   // Create the user document
      }
      setCurrentUser(user);
    } );

    return unsubscribe
  }, [] )

  // Returning the context provider with the value that will be stored in the context
  return <UserContext.Provider value={ value }>{ children }</UserContext.Provider>
}