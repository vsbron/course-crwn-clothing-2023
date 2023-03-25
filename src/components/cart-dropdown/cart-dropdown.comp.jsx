import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.comp";
import CartItem from "../cart-item/cart-item.comp";

import { CartDropdownContainer, CartDropdownItems, EmptyMessage } from "./cart-dropdown.style";

const CartDropdown = () => {

  // Getting the current cartItems array
  const { cartItems } = useContext(CartContext);              // getting the CartContext
  const navigate = useNavigate();                             // useNavigate hook for linking the button

  const goToCheckoutHandler = () => navigate("/checkout");    // Handler function with the url

  return (
    <CartDropdownContainer>
      <CartDropdownItems>
        {
          cartItems.length ? (
            cartItems.map( item => <CartItem key={ item.id } cartItem={ item } /> )) : <EmptyMessage>Your cart is empty</EmptyMessage>
        }
        
      </CartDropdownItems>
      <Button type="button" buttonContent="GO TO CHECKOUT" onClick={ goToCheckoutHandler }></Button>

    </CartDropdownContainer>
  )

}

export default CartDropdown;