import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";

import ProductCard from "../../components/product-card/product-card.comp";

import "./shop.style.scss";

const Shop = () => {

  // Getting the data from the Context
  const { products } = useContext( ProductsContext )

  return (
    <div className="products__container">
      {products.map( ( product ) => (
        <ProductCard key={product.id} product={ product }/>
      ))}
    </div> 
  )
}

export default Shop;