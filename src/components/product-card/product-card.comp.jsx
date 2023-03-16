import Button from "../button/button.comp";

import "./product-card.style.scss";

const ProductCard =  ( {product} )  => {

  const { name, price, imageUrl } = product;

  return (
    <div className="product-card__container">
      <img src={imageUrl} class="product-card__image" alt={`${name}`} />
      <div className="product-card__footer">
        <span className="product-card__name">{name}</span>
        <span className="product-card__price">${price}</span>
      </div>
      <Button buttonType="inverted" buttonContent="Add to cart" type="button"></Button>
    </div>
  )

}

export default ProductCard;