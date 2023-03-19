import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.style.scss";

const CheckoutItem = ( {cartItem} ) => {

  const { name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);

  // Initializing handlers
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  const clearItemHandler = () => clearItemFromCart(cartItem);

  return (
    <div className="checkout-item">
      <div className="checkout-item__image"><img src={imageUrl} alt={ `${name}` } /></div>
      <span className="checkout-item__name">{name}</span>
      <span className="checkout-item__quantity">
        <div className="arrow" onClick={ removeItemHandler }>&#10094;</div>
        <span className="checkout-item__quantity__value">{quantity}</span>
        <div className="arrow" onClick={ addItemHandler }>&#10095;</div></span>
      <span className="checkout-item__price">${price}</span>
      <div className="remove-button" onClick={ clearItemHandler }>&#10005;</div>
    </div>
  )
}

export default CheckoutItem;