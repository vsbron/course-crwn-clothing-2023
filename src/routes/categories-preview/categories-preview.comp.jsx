import { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectCategoriesMap, selectCategoriesIsLoading } from "../../store/categories/category.selector";

import CategoryPreview from "../../components/category-preview/category-preview.comp";

import Spinner from "../../components/spinner/spinner.comp";

const CategoriesPreview = () => {

  // Getting the CategoriesMap data from the REDUX
  const categoriesMap = useSelector(selectCategoriesMap);

  // Getting the isLoading data from the REDUX
  const isLoading = useSelector(selectCategoriesIsLoading);

  // Render the Category preview divs using the categoriesMap we got from REDUX
  // Also displays the loading spinner while isLOading is true. Once it's done fetching this element rerenders and displays <CategoryContainer>
  return (
    <Fragment>
    {
      isLoading ? <Spinner /> : Object.keys(categoriesMap).map( title => {
        const products = categoriesMap[title];
        return <CategoryPreview key={title} category={title} products={products} />
      })
    }    
    </Fragment>
  )
}

export default CategoriesPreview;