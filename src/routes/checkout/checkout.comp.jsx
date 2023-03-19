import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.comp";

import "./checkout.style.scss";

const Checkout = () => {
  const { cartItems, totalPrice } = useContext(CartContext);

  return (
    <div className="checkout">
      <div className="checkout__header">
        <div className="checkout__header__block"><span>Product</span></div>
        <div className="checkout__header__block"><span>Description</span></div>
        <div className="checkout__header__block"><span>Quantity</span></div>
        <div className="checkout__header__block"><span>Price</span></div>
        <div className="checkout__header__block"><span>Remove</span></div>
      </div>

      { cartItems.map( (cartItem) => <CheckoutItem cartItem={cartItem} key={cartItem.id} /> ) }

      <span className="checkout__total">Total: ${totalPrice}</span>
    </div>
  )
}

export default Checkout;