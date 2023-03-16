import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.style.scss";

const CartIcon = () => {

  return (
    <div className="cart-icon__container">
      <ShoppingIcon className="cart-icon__image" />
      <span className="cart-icon__count">0</span>
    </div>
  )
}

export default CartIcon;