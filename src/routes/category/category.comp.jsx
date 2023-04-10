import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCategoriesMap, selectCategoriesIsLoading } from "../../store/categories/category.selector";

import ProductCard from "../../components/product-card/product-card.comp";
import Spinner from "../../components/spinner/spinner.comp"

import { CategoryTitle, CategoryContainer } from "./category.style"

const Category = () => {

  // Getting the category from URL using useParams hook
  const { category } = useParams();

  // Getting the CategoriesMap data from the REDUX
  const categoriesMap = useSelector(selectCategoriesMap);

  // Getting the isLoading data from the REDUX
  const isLoading = useSelector(selectCategoriesIsLoading);

  // Creating products array and its setter using useState from the categoriesMap with the key of category we got rom URL
  const [ products, setProducts ] = useState( categoriesMap[category] );

  // Each time the category in URL or categoriesMap change, set the products array again with the setter
  useEffect( () => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  // Render the products list using the category from URL and the products we got from categoriesMap
  // Also displays the loading spinner while isLOading is true. Once it's done fetching this element rerenders and displays <CategoryContainer>
  return (
    <Fragment>
      <CategoryTitle>{category}</CategoryTitle>
      { isLoading ? <Spinner /> : <CategoryContainer>
        { products && products.map( product => <ProductCard key={product.id} product={product} />) }
      </CategoryContainer>}
    </Fragment>
  )
}

export default Category;