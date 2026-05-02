import { loadStripe, Stripe } from '@stripe/stripe-js';

let stripePromise: Promise<Stripe | null>;

export const getStripe = () => {
  if (!stripePromise) {
    const publishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
    if (publishableKey) {
      stripePromise = loadStripe(publishableKey);
    } else {
      console.warn('VITE_STRIPE_PUBLISHABLE_KEY is not set. Stripe functionality will be disabled.');
    }
  }
  return stripePromise;
};
