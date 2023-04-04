import { CATEGORIES_ACTION_TYPES } from "./category.types";
import { createAction } from "../../utils/reducer/reducer.utils";

// Defining the setter for the categoriesMap in the state (to be used with useDispatch)
export const setCategories = (categoriesArray) =>
  // Passing the action object to function that will run it through the switch statement inside category.reducer.js
  createAction( CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray );