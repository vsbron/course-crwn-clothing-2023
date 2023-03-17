import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.comp";
import CartItem from "../cart-item/cart-item.comp";

import "./cart-dropdown.style.scss";

const CartDropdown = () => {

  // Getting the current cartItems array
  const { cartItems } = useContext(CartContext)

  return (
    <div className="cart-dropdown__container">
      <div className="cart-dropdown__items">
        {cartItems.map( item => <CartItem key={ item.id } cartItem={ item } /> )}
      </div>
      <Button type="button" buttonContent="GO TO CHECKOUT"></Button>

    </div>
  )

}

export default CartDropdown;