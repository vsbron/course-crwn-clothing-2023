///////////////////////////////////////////////
//// NOT USED ANYMORE - KEPT FOR REFERENCE ////
///////////////////////////////////////////////
// Used later by importing the useState hook //
///////////////////////////////////////////////

import { createContext, useState, useEffect } from "react";

import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

import SHOP_DATA from "../shop-data.js";

// Actual value you want to access (need to be filled with default value)
export const CategoriesContext = createContext({
  categoriesMap: {},
});

// Actual component that wraps the component that needs to access the value inside the context
export const CategoriesProvider = ( {children} ) => {

  const [ categoriesMap, setCategoriesMap ] = useState( {} );

  // Getting the data from the Firebase database
  useEffect( () => {
    const getCategories = async() => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    }

    getCategories();
  }, [])

  // Adding the data to the Firebase database
  // useEffect( () => {
  //   addCollectionAndDocuments( "categories", SHOP_DATA)
  // }, [] )

  const value = { categoriesMap };

  return <CategoriesContext.Provider value={value}> {children} </CategoriesContext.Provider>
}