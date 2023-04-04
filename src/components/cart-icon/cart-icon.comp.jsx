import { useDispatch, useSelector } from "react-redux";

import { selectCartCount, selectIsCartOpen } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

import { CartIconContainer, CartIconImage, CartIconCount } from "./cart-icon.style";

const CartIcon = () => {

  // Getting dispatch function from the useDispatch hook
  const dispatch = useDispatch();

  // Getting the state values we need from the REDUX
  const cartCount = useSelector( selectCartCount );
  const isCartOpen = useSelector( selectIsCartOpen );

  // Cart onClick handler that sets the CartOpen while passing it the opposite value of isCartOpen
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer>
      <CartIconImage onClick={toggleIsCartOpen} />
      <CartIconCount>{cartCount}</CartIconCount>
    </CartIconContainer>
  )
}

export default CartIcon;