/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const CheckOut = ({ select, price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState('');
    const { user } = useContext(AuthContext);
    const [cardError, setCardError] = useState('');
    const [axiosSecure] = useAxiosSecure();
    const [transactionId, setTransactionId] = useState('');


    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price, axiosSecure])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        // console.log('card', card)

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message)
        } else {
            setCardError('')
            // console.log('[PaymentMethod]', paymentMethod);
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );


        if (confirmError) {
            console.log(confirmError);
        }

        console.log('payment intent', paymentIntent)

        setProcessing(false)

        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);

            // save payment information to the server
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: select.length,
                cartItems: select.map(item => item._id),
                menuItems: select.map(item => item.menuItemId),
                status: 'service pending',
                itemNames: select.map(item => item.name)
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        // toast.success('Successfully toasted!')
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Payment successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                        console.log('added succesfullay')
                    }
                })
        }
    }



    return (
        <div>

            {/* TODO: add more style in from */}
            <form onSubmit={handleSubmit}>
                <CardElement
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
                <button className='mt-5 btn btn-outline btn-accent ' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>

            {/* TODO: show error meg in a toast */}
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
            {transactionId && <p className="text-green-500">Transaction complete with transactionId: <span className='font-bold text-gray-700'>{transactionId}</span> </p>}
        </div>
    );
};

export default CheckOut;