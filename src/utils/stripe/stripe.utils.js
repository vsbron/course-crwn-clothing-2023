import { loadStripe } from "@stripe/stripe-js";

// Creating stripe instance with loadStripe function and the publisher key from Stripe
console.log(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
export const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);