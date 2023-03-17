import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.style.scss";

const CartIcon = () => {

  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon__container">
      <ShoppingIcon className="cart-icon__image" onClick={toggleIsCartOpen} />
      <span className="cart-icon__count">0</span>
    </div>
  )
}

export default CartIcon;