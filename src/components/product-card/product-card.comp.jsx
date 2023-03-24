import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.comp";

import { ProductCardContainer, ProductCardImage, ProductCardFooter, ProductCardName, ProductCardPrice } from "./product-card.style";

const ProductCard =  ( {product} )  => {

  // Destructing the product's variables and the addItemToCart method from context
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart( product )

  return (
    <ProductCardContainer>
      <ProductCardImage src={imageUrl} alt={`${name}`} />
      <ProductCardFooter>
        <ProductCardName>{name}</ProductCardName>
        <ProductCardPrice>${price}</ProductCardPrice>
      </ProductCardFooter>
      <Button buttonType="inverted" buttonContent="Add to cart" type="button" onClick={ addProductToCart }></Button>
    </ProductCardContainer>
  )

}

export default ProductCard;