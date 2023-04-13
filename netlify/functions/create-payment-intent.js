// Functions for the Netlify to simulate the Back End
require("dotenv").config();    // Importing dotenv library

// Getting the stripe while passing the STRIPE_SECRET_KEY
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// Exporting async handler
exports.handler = async (e) => {

  try {
    // Getting the amount from event's body
    const { amount } = JSON.parse(e.body);

    // Creating the paymentIntent and specifyinh the payment details
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"]
    });

    // Return object with the status code and paymentIntent in form of JSON
    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent })
    }
  } catch (err) {
    console.log({ err });

    // If error, return same object with different error code and the error message in form of JSON
    return {
      statusCode: 400,
      body: JSON.stringify({ err }),

    }
  }
}
