import { USER_ACTION_TYPES } from "./user.types";
import { createAction } from "../../utils/reducer/reducer.utils";

// Defining the setter for the user in the state (to be used with useDispatch)
export const setCurrentUser = (user) => 
  // Passing the action object to function that will run it through the switch statement inside user.reducer.js
  createAction( USER_ACTION_TYPES.SET_CURRENT_USER, user);