import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";

import ProductCard from "../../components/product-card/product-card.comp";

import "./category-preview.style.scss";

const CategoryPreview = ( { category, products } ) => {

  const {categoriesMap} = useContext(CategoriesContext);

  return(
    <div className="category-preview" >

      <h2><span className="category-preview__title"><a href={`/shop/${category}`}>{category.toUpperCase()}</a></span></h2>
      <div className="category-preview__list">
        {
          products
            .filter( ( _, index ) => index < 4 )
            .map( product => <ProductCard key={product.id} product={ product }/> )
        }
      </div>
    </div>
  )
}

export default CategoryPreview;