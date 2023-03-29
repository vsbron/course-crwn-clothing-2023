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

// Initializing the Action Types for the cart
export const CART_ACTION_TYPES = {
  SET_CART_ITEM: "SET_CART_ITEM",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
}

// Initial state of the variables we want to track with reducer
const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  totalPrice: 0,
};

// Creating the reducer which takes the state and the action
const cartReducer = ( state, action ) => {
  const { type, payload } = action;   // Destructuring the action to get the type String and the payload attribute

  switch( type ) {

    // If adding new Cart item, returning all existing cart items and adding/updating the new one (payload)
    case CART_ACTION_TYPES.SET_CART_ITEM: 
      return {
        ...state,
        ...payload
      }
      
    // If opening/closing the cart, passing the existing attributes and then the updated boolean (payload)
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return { 
        ...state,
        isCartOpen: payload
      }

    default: throw new Error(`Unhandled type of ${type} in cartReducer`)
  }
}

// Creating provider for the Context
export const CartProvider = ( {children} ) => {

  const [ { cartItems, isCartOpen, cartCount, totalPrice }, dispatch ] = useReducer(cartReducer, INITIAL_STATE);   // Initializing useReducer

  const updateCartItemsReducer = (newCartItems) =>{
    const newCartCount = newCartItems.reduce( (totalQuantity, cartItem ) => totalQuantity + cartItem.quantity, 0 );                // Using reduce method to count all quantites
    const newTotalPrice = newCartItems.reduce( (totalPrice, cartItem ) => totalPrice + cartItem.price * cartItem.quantity, 0 );    // Using reduce method to count all prices
    
    dispatch(                         // Updating the state in reducer
      createAction( CART_ACTION_TYPES.SET_CART_ITEM, {
        cartItems: newCartItems,      // Updaing the Cart items
        totalPrice: newTotalPrice,    // Updaing the Total price
        cartCount: newCartCount       // Updaing the Cart count
      }))
  }
  
  // Method for updating the cart with new product
  const addItemToCart = ( productToAdd ) => {
    const newCartItems = addCartItem ( cartItems, productToAdd );   // Adding the product to the array while using helper function
    updateCartItemsReducer(newCartItems);                           // Passing the new cart items to the Reducer
  }

  // Method for removing the product from cartItems
  const removeItemFromCart = ( cartItemToRemove ) => {
    const newCartItems = removeCartItem ( cartItems, cartItemToRemove );  // Removing the product from the array while using helper function
    updateCartItemsReducer(newCartItems);                                 // Passing the new cart items to the Reducer
  }

  // Method for removing the product from cartItems entirely
  const clearItemFromCart = ( cartItemToClear ) => {
    const newCartItems = clearCartItem ( cartItems, cartItemToClear );    // Clearing the product from the array while using helper function
    updateCartItemsReducer(newCartItems);                                 // Passing the new cart items to the Reducer
  }

  // Method for toggling the cart window
  const setIsCartOpen = (boolean) => {
    dispatch( createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN ,boolean));
  }

  // Setting the value variables
  const value = { isCartOpen, setIsCartOpen, addItemToCart, removeItemFromCart, clearItemFromCart, cartItems, cartCount, totalPrice };

  return <CartContext.Provider value={value}> { children } </CartContext.Provider>
}