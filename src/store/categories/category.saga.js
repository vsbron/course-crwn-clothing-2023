import { takeLatest, all, call, put } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import { fetchCategoriesSuccess, fetchCategoriesFailed } from "./category.action";
import { CATEGORIES_ACTION_TYPES } from "./category.types";

//// Function generators for REDUX-Saga
// Function generator that pulls the categories, and throws an Error if necessary
export function* fetchCategoriesAsync() {
  try{
    const categoriesArray = yield call(getCategoriesAndDocuments, 'categories');
    yield put(fetchCategoriesSuccess( categoriesArray ));
  } catch (err) {
    yield put(fetchCategoriesFailed( err ));
  }
}

// Function generator that takes the latest action of Fetch start and executes fetchCategoriesAsync
export function* onFetchCategories() {
  yield takeLatest( CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync );
}

// Main function generator that calls the fetching and pauses one all the code is completed
export function* categoriesSaga() {
  yield all([ call(onFetchCategories) ]);
}