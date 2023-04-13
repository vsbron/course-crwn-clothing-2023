import { useState } from "react";
import { useSelector } from "react-redux";

import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { BUTTON_TYPE_CLASSES } from "../button/button.comp";

import { PaymentFormCont, FormCont, PaymentButton } from "./payment-form.style";

const PaymentForm = () => {

  // Getting the instances from hooks
  const stripe = useStripe();
  const elements = useElements();

  const amount = useSelector( selectCartTotal );
  const currentUser = useSelector( selectCurrentUser );
  const [isProcessingPayment, setIsProcessingPayment] = useState( false );

  // The form handler (async)
  const paymentHandler = async (e) => {
    e.preventDefault();                   // Preventing default behavior of the form
    if(!stripe || !elements) return       // Guard clause

    // Setting the processing state to true, so the button would be disabled
    setIsProcessingPayment(true);

    // Fetching the data with our netlify function file location, method, header and body
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: amount * 100 })
    }).then(res => res.json());

    // Getting the clien_secret from the JSONofied response
    const { paymentIntent: { client_secret }} = response;

    // Building the payment results with the details of the payment
    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement( CardElement ),
        billing_details: { name: currentUser ? currentUser.displayName : "Guest" }
      }});

    // Setting the processing state to false, so the button would be enabled again
    setIsProcessingPayment(false);

    // Alerting message if payment is successfull
    if(paymentResult.error){
      alert(paymentResult.error)
    } else { if (paymentResult.paymentIntent.status === "succeeded") alert("Payment Successfull") }
  };

  return (
    <PaymentFormCont>
      <FormCont onSubmit={ paymentHandler }>
        <h2>Credit Card Payment</h2>
        <CardElement />
        <PaymentButton isLoading={isProcessingPayment} buttonType={BUTTON_TYPE_CLASSES.inverted} buttonContent={"Pay Now"}></PaymentButton>
      </FormCont>
    </PaymentFormCont>
  )
}

export default PaymentForm;