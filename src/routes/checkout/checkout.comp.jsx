import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.comp";

import { CheckoutContainer, CheckoutHeader, CheckoutHeaderBlock, CheckoutTotal } from "./checkout.style";

const Checkout = () => {
  // Getting the CartItems list and the Total Price amount from the Cart Context
  const { cartItems, totalPrice } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <CheckoutHeaderBlock><span>Product</span></CheckoutHeaderBlock>
        <CheckoutHeaderBlock><span>Description</span></CheckoutHeaderBlock>
        <CheckoutHeaderBlock><span>Quantity</span></CheckoutHeaderBlock>
        <CheckoutHeaderBlock><span>Price</span></CheckoutHeaderBlock>
        <CheckoutHeaderBlock><span>Remove</span></CheckoutHeaderBlock>
      </CheckoutHeader>

      { cartItems.map( (cartItem) => <CheckoutItem cartItem={cartItem} key={cartItem.id} /> ) }

      <CheckoutTotal>Total: ${totalPrice}</CheckoutTotal>
    </CheckoutContainer>
  )
}

export default Checkout;