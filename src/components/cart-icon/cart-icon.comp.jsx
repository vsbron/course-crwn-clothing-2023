import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { CartIconContainer, CartIconImage, CartIconCount } from "./cart-icon.style";

const CartIcon = () => {

  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer>
      <CartIconImage onClick={toggleIsCartOpen} />
      <CartIconCount>{cartCount}</CartIconCount>
    </CartIconContainer>
  )
}

export default CartIcon;