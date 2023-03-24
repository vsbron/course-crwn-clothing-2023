import { CartItemContainer, CartItemImage, CartItemDetails, CartItemDetailsName, CartItemDetailsPrice } from "./cart-item.style";

const CartItem = ( {cartItem} ) => {

  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={`${name}`} />
      <CartItemDetails>
        <CartItemDetailsName>{name}</CartItemDetailsName>
        <CartItemDetailsPrice>{quantity} x ${price}</CartItemDetailsPrice>
      </CartItemDetails>
    </CartItemContainer>
  )
}

export default CartItem