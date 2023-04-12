import { CATEGORIES_ACTION_TYPES } from "./category.types";
import { createAction } from "../../utils/reducer/reducer.utils";

// import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

// REDUX-Thunk
// Allows us to pass functions as actions in the asyncronous way.
// Creating 3 actions where each of them represents the status of the fetch function.
export const fetchCategoriesStart = () => createAction( CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START );

export const fetchCategoriesSuccess = (categoriesArray) => createAction( CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray );

export const fetchCategoriesFailed = (err) => createAction( CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, err );

// // REDUX-thunk async function
// export const fetchCategoriesAsync = () => async ( dispatch ) => {
//   // Calling fetch start action when the process starts
//   dispatch( fetchCategoriesStart() );
//   try{
//     const categoriesArray = await getCategoriesAndDocuments('categories');
//     dispatch( fetchCategoriesSuccess( categoriesArray ) );
//   } catch (err) {
//     // If fails, calling fetch failed and passing the error to it
//     dispatch( fetchCategoriesFailed( err ) );
//   }

// }