// Contains the logic of converting the data we gotr from firebase to the object with number of categories
export const selectCategoriesMap = (state) => state.categories.categories.reduce(
  ( acc, category ) => {                  // Going through all of the documents using .reduce() methods
    const { title, items } = category;    // Destructuring the title and the items from each category
    acc[title.toLowerCase()] = items;     // Adding to the acc array with title works as a key, and items array work as a value
    return acc;                           // Returning the acc for the next iteration
  }, {}
);