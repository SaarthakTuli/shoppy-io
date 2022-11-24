import { loadStripe } from "@stripe/stripe-js";

let stripePromise = null;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }

  console.log("promise in get is: ", stripePromise);
  console.log("type is: ", typeof stripePromise);

  return stripePromise;
};

export default getStripe;
