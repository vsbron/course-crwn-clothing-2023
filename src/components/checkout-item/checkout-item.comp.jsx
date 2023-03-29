import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import { CheckoutItemContainer, CheckoutItemImage, CheckoutItemName, CheckoutItemQuantity, CheckoutItemQuantityValue, CheckoutItemPrice, CheckoutArrow, RemoveButton } from "./checkout-item.style";

const CheckoutItem = ( {cartItem} ) => {

  // Getting all the values from the cartItem and the cart methods fron the Cart Context
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);

  // Initializing handlers
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  const clearItemHandler = () => clearItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <CheckoutItemImage><img src={imageUrl} alt={ `${name}` } /></CheckoutItemImage>
      <CheckoutItemName>{name}</CheckoutItemName>
      <CheckoutItemQuantity>
        <CheckoutArrow onClick={ removeItemHandler }>&#10094;</CheckoutArrow>
        <CheckoutItemQuantityValue>{quantity}</CheckoutItemQuantityValue>
        <CheckoutArrow onClick={ addItemHandler }>&#10095;</CheckoutArrow></CheckoutItemQuantity>
      <CheckoutItemPrice>${price}</CheckoutItemPrice>
      <RemoveButton onClick={ clearItemHandler }>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem;