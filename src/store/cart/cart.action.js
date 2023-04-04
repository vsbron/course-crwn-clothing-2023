import { CART_ACTION_TYPES } from "./cart.types";

import { createAction } from "../../utils/reducer/reducer.utils";

// HELPER FUNCTION for adding the new product into cart
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

// HELPER FUNCTION for removing the product from cart
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

// HELPER FUNCTION for clearing the product from cart
const clearCartItem = ( cartItems, cartItemToClear ) => cartItems.filter( cartItem => cartItem.id !== cartItemToClear.id );

/////////////////
//// Actions ////
/////////////////

// Action for setting the new value for isCartOpen. Receives boolean
export const setIsCartOpen = (boolean) =>
  createAction( CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean )

// Action for updating the cart with new product (uses helper function from above)
export const addItemToCart = ( cartItems, productToAdd ) => {
  const newCartItems = addCartItem( cartItems, productToAdd );              // Adding the product to the array while using helper function
  return createAction( CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems );    // Passing the new cart items to the REDUX
}

// Action for removing the product from cartItems (uses helper function from above)
export const removeItemFromCart = ( cartItems, cartItemToRemove ) => {
  const newCartItems = removeCartItem( cartItems, cartItemToRemove );       // Removing the product from the array while using helper function
  return createAction( CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems );    // Passing the new cart items to the REDUX
}

// Action for removing the product from cartItems entirely (uses helper function from above)
export const clearItemFromCart = ( cartItems, cartItemToClear ) => {
  const newCartItems = clearCartItem( cartItems, cartItemToClear );         // Clearing the product from the array while using helper function
  return createAction( CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems );    // Passing the new cart items to the REDUX
}