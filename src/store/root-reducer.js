import { combineReducers } from "redux";              // Allows us to create a final, big reducer by combining smaller reducers together

import { userReducer } from "./user/user.reducer";    // Importing the user reducer thet we need to be in the root-reducer

// Declaring root reducer by calling combineReducers which takes the object where the keys and the values are going to be the name of the reducer and the reducer itself
export const rootReducer = combineReducers({
  user: userReducer,
})