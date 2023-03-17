import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.comp";

import "./product-card.style.scss";

const ProductCard =  ( {product} )  => {

  // Destructing the product's variables and the addItemToCart method from context
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart( product )

  return (
    <div className="product-card__container">
      <img src={imageUrl} className="product-card__image" alt={`${name}`} />
      <div className="product-card__footer">
        <span className="product-card__name">{name}</span>
        <span className="product-card__price">${price}</span>
      </div>
      <Button buttonType="inverted" buttonContent="Add to cart" type="button" onClick={ addProductToCart }></Button>
    </div>
  )

}

export default ProductCard;