import { useDispatch, useSelector } from "react-redux";

import { addItemToCart, removeItemFromCart, clearItemFromCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import { CheckoutItemContainer, CheckoutItemImage, CheckoutItemName, CheckoutItemQuantity, CheckoutItemQuantityValue, CheckoutItemPrice, CheckoutArrow, RemoveButton } from "./checkout-item.style";

const CheckoutItem = ( {cartItem} ) => {

  // Getting dispatch function from the useDispatch hook
  const dispatch = useDispatch();

  // Getting all the values from the cartItem
  const { name, imageUrl, price, quantity } = cartItem;

  // Getting the current cartItems array from REDUX
  const cartItems = useSelector(selectCartItems)

  // Initializing handlers that use dispatch
  const addItemHandler = () => dispatch(addItemToCart( cartItems, cartItem ));
  const removeItemHandler = () => dispatch(removeItemFromCart( cartItems, cartItem ));
  const clearItemHandler = () => dispatch(clearItemFromCart( cartItems, cartItem ));

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