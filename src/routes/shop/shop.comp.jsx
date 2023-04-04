import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils.js";

import { setCategories } from "../../store/categories/category.action.js";
import CategoriesPreview from "../categories-preview/categories-preview.comp";
import Category from "../category/category.comp";

const Shop = () => {

  // Getting the dispatch method for the REDUX
  const dispatch = useDispatch();

  useEffect( () => {
    // Method for getting the categories from the firebase and dispatching the categories map to the REDUX 
    const getCategoriesMap = async() => {
      const categoriesArray = await getCategoriesAndDocuments('categories');
      dispatch(setCategories(categoriesArray));
    }

    // Calling the method
    getCategoriesMap();
  }, [])

  return (
    <Routes>
      <Route index element={ <CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  )
}

export default Shop;