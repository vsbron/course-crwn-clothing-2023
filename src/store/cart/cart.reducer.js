import { CART_ACTION_TYPES } from "./cart.types";

// The initial state
const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

// REDUCER: Creating the reducer which takes the state and the action
// State is used is when you need to keep track of previous values and increment/decrement something for example
// *In REDUX we need to initiate the state because originally it took it from useReducer hook that we don't have here
export const cartReducer = (state = CART_INITIAL_STATE, action = {} ) => {

  // Destructuring action to a type [string] and optional payload [anything]
  const { type, payload } = action;

  // Using the switch statement to give different outcomes based on the type we got from action object
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,             // Returns all the rest of the state values
        cartItems: payload,   // Returns the updated cartItems array
      };

    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,               // Returns all the rest of the state values
        isCartOpen: payload,    // Returns the updated state of isCartOpen
      };
  
    // *In REDUX, instead of throwing an Error by default we need to return the state.
    // Because there's one dispatch for all reducers, it can match the case in different reducer
    default: return state;
  }
}