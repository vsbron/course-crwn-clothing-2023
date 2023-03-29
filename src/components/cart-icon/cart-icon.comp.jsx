import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { CartIconContainer, CartIconImage, CartIconCount } from "./cart-icon.style";

const CartIcon = () => {

  // Destructuring some values from Cart context
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  // Cart onClick handler that sets the CartOpen while passing it the opposite value of isCartOpen
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer>
      <CartIconImage onClick={toggleIsCartOpen} />
      <CartIconCount>{cartCount}</CartIconCount>
    </CartIconContainer>
  )
}

export default CartIcon;