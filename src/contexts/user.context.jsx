import { createContext, useState, useEffect } from "react";

import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

// Actual value you want to access (need to be filled with default value)
export const UserContext = createContext({
  currentUser: null,            // Empty (default) user
  setCurrentUser: () => null,   // Empty (default) function
});

// Actual component that wraps the component that needs to access the value inside the context
export const UserProvider = ( { children } ) => {
  const [currentUser, setCurrentUser] = useState(null);   // Creating user and its setter with useState
  const value = { currentUser, setCurrentUser };          // Passing the state variables to the value that goes to the context provider

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