import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import React, {useContext, useEffect, useState} from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import {AuthContext} from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const CheckoutForm = ({cart}) => {
  const [axiosSecure] = useAxiosSecure();
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const {user} = useContext(AuthContext);
  const [proccesing, setProccesing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const {price} = cart;

  useEffect(() => {
    if (cart) {
      axiosSecure.post("/create-payment-intent", {price}).then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [cart]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setProccesing(true);
    const {paymentIntent, error: confirmError} =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      });

    setProccesing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const transactionId = paymentIntent.id;
      const payment = {
        email: user?.email,
        transactionId: transactionId,
        price,
        data: new Date(),
        quantity: 1,
        classId: cart?.classId,
        itemsName: cart?.name,
        availableSeat: cart?.availableSeat,
      };
      axiosSecure.post("/payments", payment).then((res) => {
        if (res.data.result.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Payment Successful!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          className="shadow-indigo-300 shadow p-2"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary btn-sm mt-4"
          type="submit"
          disabled={!stripe || !clientSecret || proccesing}
        >
          Pay
        </button>
      </form>
      {cardError && <span className="text-yellow-500">{cardError}</span>}
      {transactionId && (
        <span className="text-green-500">
          {" "}
          Transaction complete with Transaction Id:{transactionId}
        </span>
      )}
    </div>
  );
};

export default CheckoutForm;
