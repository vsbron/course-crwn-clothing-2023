import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.comp";
import CartItem from "../cart-item/cart-item.comp";

import "./cart-dropdown.style.scss";

const CartDropdown = () => {

  // Getting the current cartItems array
  const { cartItems } = useContext(CartContext);              // getting the CartContext
  const navigate = useNavigate();                             // useNavigate hook for linking the button

  const goToCheckoutHandler = () => navigate("/checkout");    // Handler function with the url

  return (
    <div className="cart-dropdown__container">
      <div className="cart-dropdown__items">
        {cartItems.map( item => <CartItem key={ item.id } cartItem={ item } /> )}
      </div>
      <Button type="button" buttonContent="GO TO CHECKOUT" onClick={ goToCheckoutHandler }></Button>

    </div>
  )

}

export default CartDropdown;