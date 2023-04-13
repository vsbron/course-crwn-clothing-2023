
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";

import PaymentForm from "../../components/payment-form/payment-form.comp";

import CheckoutItem from "../../components/checkout-item/checkout-item.comp";
import { CheckoutContainer, CheckoutHeader, CheckoutHeaderBlock, CheckoutTotal } from "./checkout.style";

const Checkout = () => {

  // Getting the CartItems list and the Total Price amount from REDUX
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotal);

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

      <PaymentForm></PaymentForm>

    </CheckoutContainer>
  )
}

export default Checkout;