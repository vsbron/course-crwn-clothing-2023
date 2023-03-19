import { createContext, useState, useEffect } from "react";

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

// Creating provider for the Context
export const CartProvider = ( {children} ) => {

  // Initiating the value with attributes from useState
  const [ isCartOpen, setIsCartOpen ] = useState(false);
  const [ cartItems, setCartItems] = useState([]);
  const [ cartCount, setCartCount ] = useState(0);
  const [ totalPrice, setTotalPrice ] = useState(0);

  //  useEffect hook to count the total number [quantities] of the items inside the cart
  useEffect( () => {
    const newCartCount = cartItems.reduce( (totalQuantity, cartItem ) => totalQuantity + cartItem.quantity, 0 );                // Using reduce method to count all quantites
    setCartCount( newCartCount );                                                                                               // Setting the newCartCount
  }, [cartItems] );

  //  useEffect hook to count the total price of all items in the cart
  useEffect( () => {
    const newTotalPrice = cartItems.reduce( (totalPrice, cartItem ) => totalPrice + cartItem.price * cartItem.quantity, 0 );    // Using reduce method to count all prices
    setTotalPrice( newTotalPrice );                                                                                             // Setting the newTotalPrice
  }, [cartItems] );
  
  // Method for updating the cart with new product
  const addItemToCart = ( productToAdd ) => {
    const newCartItems = addCartItem ( cartItems, productToAdd );   // Adding the product to the array
    setCartItems(newCartItems);                                     // Setting the state with the new array
  }

  // Method for removing the product from cartItems
  const removeItemFromCart = ( cartItemToRemove ) => {
    const newCartItems = removeCartItem ( cartItems, cartItemToRemove );  // Removing the product from the array
    setCartItems(newCartItems);                                           // Setting the state with the new array
  }

  // Method for removing the product from cartItems entirely
  const clearItemFromCart = ( cartItemToClear ) => {
    const newCartItems = clearCartItem ( cartItems, cartItemToClear );   // Clearing the product from the array
    setCartItems(newCartItems);                                           // Setting the state with the new array
  }

  // Setting the value variables
  const value = { isCartOpen, setIsCartOpen, addItemToCart, removeItemFromCart, clearItemFromCart, cartItems, cartCount, totalPrice };

  return <CartContext.Provider value={value}> { children } </CartContext.Provider>
}