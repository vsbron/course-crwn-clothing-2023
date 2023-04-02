import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";

import ProductCard from "../../components/product-card/product-card.comp";

import { CategoryTitle, CategoryContainer } from "./category.style"

const Category = () => {

  // Getting the category from URL using useParams hook
  const { category } = useParams();

  // Getting the CategoriesMap data from the REDUX store
  const categoriesMap = useSelector(selectCategoriesMap);

  // Creating products array and its setter using useState from the categoriesMap with the key of category we got rom URL
  const [ products, setProducts ] = useState( categoriesMap[category] );

  // Each time the category in URL or categoriesMap change, set the products array again with the setter
  useEffect( () => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  // Rendfer the products list using the category from URL and the products we got from categoriesMap
  return (
    <Fragment>
      <CategoryTitle>{category}</CategoryTitle>
      <CategoryContainer>
        { products && products.map( product => <ProductCard key={product.id} product={product} />) }
      </CategoryContainer>
    </Fragment>
  )
}

export default Category;