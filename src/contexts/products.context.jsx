import { createContext, useState } from "react";

import PRODUCTS from "../shop-data.json";

// Actual value you want to access (need to be filled with default value)
export const ProductsContext = createContext({
  products: [],
});

// Actual component that wraps the component that needs to access the value inside the context
export const ProductsProvider = ( {children} ) => {

  const [ products, setProducts ] = useState(PRODUCTS);
  const value = { products };

  return <ProductsContext.Provider value={value}> {children} </ProductsContext.Provider>
}