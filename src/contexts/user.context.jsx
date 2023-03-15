import { createContext, useState } from "react";

// Actual value you want to access (need to be filled with default value)
export const UserContext = createContext({
  currentUser: null,            // Empty (default) user
  setCurrentUser: () => null,   // Empty (default) function
});

// Actual component that wraps the component that needs to access the value inside the context
export const UserProvider = ( { children } ) => {
  const [currentUser, setCurrentUser] = useState(null);   // Creating user and its setter with useState
  const value = { currentUser, setCurrentUser };          // Passing the state variables to the value that goes to the context provider

  // Returning the context provider with the value that will be stored in the context
  return <UserContext.Provider value={ value }>{ children }</UserContext.Provider>
}