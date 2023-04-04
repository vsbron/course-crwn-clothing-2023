import { createSelector } from "reselect";    // Importing createSelector that will allows us to use memoization

//// Memoization - caches the output of the function based on its inputs
//// Prevents the function from running again if its attributes are the same as on previous run

// Pulling the cart reducer from the REDUX state
const selectCartReducer = state => state.cart;

// Creating memoize selector that uses createSelector method and takes 2 arguments: Input selector and output selector
export const selectCartItems = createSelector(
  [selectCartReducer],                  // Input - the slice that has the argument that we need in output
  (cartSlice) => cartSlice.cartItems    // Output - the cartItems array from the reducer state   
)

// Creating memoize selector that uses createSelector method and takes 2 arguments: Input selector and output selector
export const selectIsCartOpen = createSelector(
  [selectCartReducer],                  // Input - the slice that has the argument that we need in output
  (cartSlice) => cartSlice.isCartOpen   // Output - the isCartOpen boolean from the reducer state
)

// Another memoize selector
// The selector that contains the logic of generating the total count number of cartItems (to be used with useSelector)
export const selectCartCount = createSelector(
  [selectCartItems],                    // Input - selectCartItems we created above that contains categories array
  (cartItems) => cartItems.reduce(      // Output - the cartItems array inside selectCartItems
    ( total, cartItem ) => total + cartItem.quantity,
    0))

// Another memoize selector
// The selector that contains the logic of generating the total cost of cartItems (to be used with useSelector)
export const selectCartTotal = createSelector(
  [selectCartItems],                    // Input - selectCartItems we created above that contains categories array
  (cartItems) => cartItems.reduce(      // Output - the cartItems array inside selectCartItems
    ( total, cartItem ) => total + cartItem.quantity * cartItem.price,
    0))

// As a result of all code above - as long as state.cartItems (and state.isCartOpen) is the same object app won't re-render the cartItems