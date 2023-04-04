import { createContext, useReducer } from "react";

import { createAction } from "../utils/reducer/reducer.utils";

// Helper function for adding the new product into cart
const addCartItem = ( cartItems, productToAdd ) => {

  // Checking whether the product already exists in the cart
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === productToAdd.id
  );
  
  // If so, returning array with increased quantity of this product
  if(existingCartItem) {
    return cartItems.map( cartItem => cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity+1 } : cartItem )
  }

  // If not, returns array and adds new product to it
  return [ ...cartItems, { ...productToAdd, quantity: 1 } ];

}

// Helper function for removing the product from cart
const removeCartItem = ( cartItems, cartItemToRemove ) => {

  // Find carItem to remove
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from cart
  if( existingCartItem.quantity === 1) {
    return cartItems.filter( cartItem => cartItem.id !== cartItemToRemove.id );
  }

  // return back cartItems with matching cartItem with with reduced quantity
  return cartItems.map( cartItem => cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity-1 } : cartItem )
}

// Helper function for clearing the product from cart
const clearCartItem = ( cartItems, cartItemToClear ) => cartItems.filter( cartItem => cartItem.id !== cartItemToClear.id );


// Creating context with default variables of cart open (false) and its setter
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  totalPrice: 0,
})

// REDUCER: Initializing the Action Types for the cart actions
export const CART_ACTION_TYPES = {
  SET_CART_ITEM: "SET_CART_ITEM",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
}

// REDUCER: Setting the initial state for the cart variables
const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  totalPrice: 0,
};

// REDUCER: Creating the reducer which takes the state and the action
const cartReducer = ( state, action ) => {

  // Destructuring action to a type [string] and optional payload [anything]
  const { type, payload } = action;

  switch( type ) {

    case CART_ACTION_TYPES.SET_CART_ITEM:       // If adding new Cart item
      return {
        ...state,                               // Returns the object with all the previous cart items
        ...payload                              // Updating the modified one which is currentUser object
      }
      
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:    // If opening/closing the cart
      return { 
        ...state,                               // Return all the rest of variables in the state that don't change
        isCartOpen: payload                     // Change isCartOpen to the boolean that was in the payload
      }

    // If no case matched - throw Error
    default: throw new Error(`Unhandled type of ${type} in cartReducer`);
  }
}

// Creating provider for the Context
export const CartProvider = ( {children} ) => {

  // Initialising the reducer with the useReducer hook that takes our reducer and the initial value of the state we initialized previously ()
  const [ { cartItems, isCartOpen, cartCount, totalPrice }, dispatch ] = useReducer(cartReducer, INITIAL_STATE);   // We get back the current state (destructured) and the dispatch function

  // Defining the function that will toggle the cart window. It takes the new boolean value
  const setIsCartOpen = (boolean) => {
    // Passing the action object to the dispatch function that will run it through the switch statement written above
    dispatch( createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean));
  }

  // Defining the function that will add the new item to the cart and update the overall cost and quantity. It takes the new cartItems array
  const updateCartItemsReducer = (newCartItems) =>{
    const newCartCount = newCartItems.reduce( (totalQuantity, cartItem ) => totalQuantity + cartItem.quantity, 0 );                // Using reduce method to count all quantites
    const newTotalPrice = newCartItems.reduce( (totalPrice, cartItem ) => totalPrice + cartItem.price * cartItem.quantity, 0 );    // Using reduce method to count all prices
    
    // Passing the action object to the dispatch function that will run it through the switch statement written above
    dispatch(
      createAction( CART_ACTION_TYPES.SET_CART_ITEM, {
        cartItems: newCartItems,      // Updaing the Cart items
        totalPrice: newTotalPrice,    // Updaing the Total price
        cartCount: newCartCount       // Updaing the Cart count
      })
    )
  }
  
  // Method for updating the cart with new product
  const addItemToCart = ( productToAdd ) => {
    const newCartItems = addCartItem( cartItems, productToAdd );          // Adding the product to the array while using helper function
    updateCartItemsReducer(newCartItems);                                 // Passing the new cart items to the Reducer function written above
  }

  // Method for removing the product from cartItems
  const removeItemFromCart = ( cartItemToRemove ) => {
    const newCartItems = removeCartItem( cartItems, cartItemToRemove );   // Removing the product from the array while using helper function
    updateCartItemsReducer(newCartItems);                                 // Passing the new cart items to the Reducer function written above
  }

  // Method for removing the product from cartItems entirely
  const clearItemFromCart = ( cartItemToClear ) => {
    const newCartItems = clearCartItem( cartItems, cartItemToClear );     // Clearing the product from the array while using helper function
    updateCartItemsReducer(newCartItems);                                 // Passing the new cart items to the Reducer function written above
  }

  // Setting the value variables
  const value = { isCartOpen, setIsCartOpen, addItemToCart, removeItemFromCart, clearItemFromCart, cartItems, cartCount, totalPrice };

  // Returning the context provider with the value that will be stored in the context with all the variables
  return <CartContext.Provider value={value}> { children } </CartContext.Provider>
}