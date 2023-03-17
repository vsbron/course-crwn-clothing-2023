import { createContext, useState } from "react";

// Helper function for searching the array for matching id
const addCartItem = ( cartItems, productToAdd ) => {

  // Checking whether the product already exists in the cart
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === productToAdd.id
  );
  
  // If so, returning array with increased quantity of this product
  if ( existingCartItem ) {
    return cartItems.map( cartItem => cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity+1 } : cartItem)
  }

  // If not, returns array and adds new product to it
  return [ ...cartItems, { ...productToAdd, quantity: 1 } ];
}

// Creating context with default variables of cart open (false) and its setter
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
})

// Creating provider for the Context
export const CartProvider = ( {children} ) => {

  // Initiating the value with attributes from useState
  const [ isCartOpen, setIsCartOpen ] = useState(false);
  const [ cartItems, setCartItems] = useState([]);
  
  // Method for updating the cart with new product
  const addItemToCart = ( productToAdd ) => {
    const newCartItems = addCartItem ( cartItems, productToAdd );   // Adding the product to the array
    setCartItems(newCartItems);                                     // Setting the state with the new array
  }
  
  // Setting the value variables
  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems };

  return <CartContext.Provider value={value}> { children } </CartContext.Provider>
}