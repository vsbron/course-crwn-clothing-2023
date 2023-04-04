import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";

import Button from "../button/button.comp";
import CartItem from "../cart-item/cart-item.comp";

import { CartDropdownContainer, CartDropdownItems, EmptyMessage } from "./cart-dropdown.style";

const CartDropdown = () => {

  // Getting the current cartItems array from REDUX
  const cartItems = useSelector(selectCartItems);

  const navigate = useNavigate();                             // useNavigate hook for linking the button
  const goToCheckoutHandler = () => navigate("/checkout");    // Button onClick handler that provides the link

  return (
    <CartDropdownContainer>

      <CartDropdownItems>
        { cartItems.length
          ? ( cartItems.map( item => <CartItem key={ item.id } cartItem={ item } /> ))
          : <EmptyMessage>Your cart is empty</EmptyMessage> }  
      </CartDropdownItems>
      
      <Button type="button" buttonContent="GO TO CHECKOUT" onClick={ goToCheckoutHandler }></Button>

    </CartDropdownContainer>
  )
}

export default CartDropdown;