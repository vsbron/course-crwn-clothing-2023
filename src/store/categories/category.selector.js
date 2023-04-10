import { createSelector } from "reselect";    // Importing createSelector that will allows us to use memoization

//// Memoization - caches the output of the function based on its inputs
//// Prevents the function from running again if its attributes are the same as on previous run

// Pulling the categories reducer from the REDUX state
const selectCategoryReducer = state => state.categories;

// Creating memoize selector that uses createSelector method and takes 2 arguments: Input selector and output selector
export const selectCategories = createSelector(
  [selectCategoryReducer],                            // Input - the slice that has the argument that we need in output
  (categoriesSlice) => categoriesSlice.categories     // Output - the categories array from the reducer state
)
  
// Another memoize selector
// The selector that contains the logic of converting the data we got from firebase to the object with number of categories (to be used with useSelector)
export const selectCategoriesMap = createSelector(    // Using createSelect again to prevent it to rerun if category state hasn't changed

  [selectCategories],                                 // Input - selectCategories we created above that contains categories array
  (categories) => categories.reduce(                  // Output - the categories array inside selectCategories
  
    ( acc, category ) => {                            // Going through all of the documents using .reduce() methods
      const { title, items } = category;              // Destructuring the title and the items from each category
      acc[title.toLowerCase()] = items;               // Adding to the acc array with title works as a key, and items array work as a value
      return acc;                                     // Returning the acc for the next iteration
    }, {}));

// As a result of all code above - as long as state.categories is the same object app won't re-render the categories

// Memoize selector of the Spinner
// Used when REDUX-Thunk is fetching the data
export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],                            // Input - the slice that has the argument that we need in output 
  ( categoriesSlice ) => categoriesSlice.isLoading    // Output - the isLoading variable from categories slice
);