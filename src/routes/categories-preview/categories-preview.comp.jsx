import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";

import CategoryPreview from "../../components/category-preview/category-preview.comp";

const CategoriesPreview = () => {

  // Getting the data from the Context
  const { categoriesMap } = useContext( CategoriesContext )

  return (
    <Fragment>
      {Object.keys(categoriesMap).map( title => {
        const products = categoriesMap[title];
        return <CategoryPreview key={title} category={title} products={products} />
      })}
    </Fragment>
  )
}

export default CategoriesPreview;