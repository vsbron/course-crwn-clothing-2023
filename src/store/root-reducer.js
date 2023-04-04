import { combineReducers } from "redux";    // Allows us to create a final, big reducer by combining smaller reducers together

// Importing all of the reducers we need to be inside the root-reducer
import { userReducer } from "./user/user.reducer"
import { cartReducer } from "./cart/cart.reducer";
import { categoriesReducer } from "./categories/category.reducer";

// Declaring root reducer by calling combineReducers which takes the object where the keys and the values are going to be the name of the reducer and the reducer itself
export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  categories: categoriesReducer,
})