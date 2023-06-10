import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../hooks/useCart";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_getway_pk)


const Payment = () => {
    const [cart] = useCart();
    const total = parseFloat(
        cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)
      );
  return (
    <div>
      <h3 className="text-3xl text-center my-4 font-bold">
        Please Process Your Payment
      </h3>
      <div className="divider after:bg-black before:bg-black"></div>
      <div  className="w-1/2 m-10" >
        <Elements stripe={stripePromise}>
            <CheckoutForm cart={cart} price={total}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
