import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, {  useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const CheckoutForm = ({price,cart}) => {
    const [axiosSecure] = useAxiosSecure();
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('');
    const {user} = useContext(AuthContext);
    const [proccesing , setProccesing ] = useState(false)
    const [transactionId, setTransactionId] = useState('')


    useEffect(()=>{
       if (price > 0) {
        axiosSecure.post('/create-payment-intent', {price})
        .then(res =>{
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret)
        })
       }
    },[price])


    const handleSubmit  = async(event) =>{
        event.preventDefault();

        if (!stripe || !elements) {
            return 
        }

        const card = elements.getElement(CardElement)
        if (card === null) {
            return 
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });

          if (error) {
            console.log('[error]', error);
            setCardError(error.message)
          } else {
            setCardError('')
          }
          setProccesing(true)
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

          if (confirmError) {
            console.log(confirmError);
          }
            console.log(paymentIntent);
            setProccesing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)
            const transactionId = paymentIntent.id;
            const payment = {
                email: user?.email,
                transactionId: transactionId,
                price,
                data: new Date(),
                quantity: cart.length,
                itemsId: cart.map(item => item._id ),
                classId: cart.map(item => item.classId),
                itemsName: cart.map(item => item.name ),
                availableSeat: cart.map(item => item.availableSeat)
            }
            axiosSecure.post('/payments', payment)
            .then(res =>{
                console.log(res.data);
                if (res.data.result.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Payment Successful!',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })

        }
          

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
      <CardElement className='shadow-indigo-300 shadow p-2'
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-primary btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret || proccesing}>
        Pay
      </button>
    </form>
    {cardError && <span className='text-yellow-500'>{cardError}</span>}
    {transactionId && <span className='text-green-500'> Transaction complete with Transaction Id:{transactionId}</span>}
        </div>
    );
};

export default CheckoutForm;