import { CATEGORIES_ACTION_TYPES } from "./category.types";
import { createAction } from "../../utils/reducer/reducer.utils";

// Defining the setter for the categoriesMap in the state
export const setCategoriesMap = (categoriesMap) =>
  // Passing the action object to function that will run it through the switch statement inside category.reducer.js
  createAction( CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap )