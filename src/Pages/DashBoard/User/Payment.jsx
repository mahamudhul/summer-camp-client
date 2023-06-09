/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import CheckOut from './CheckOut';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { AuthContext } from '../../../Provider/AuthProvider';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from 'react-query';



const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);


const Payment = () => {
    const { user, loading } = useContext(AuthContext);


    const [axiosSecure] = useAxiosSecure();

    const { data: select = [] } = useQuery({

        queryKey: ['select', user?.email],
        enabled: !loading,

        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`);
            return res.data;

        }
    })

    // console.log(select)

    // TODO: add single class price
    const total = select.reduce((sum, item) => sum + item.price, 0);
     console.log(total)
    const price = parseFloat(total.toFixed(2))


    return (
        <div>
            <h1>Please, pay our Due amount</h1>
            
            <Elements stripe={stripePromise}>
                <CheckOut select={select} price={price}/>
            </Elements>
        </div>
    );
};

export default Payment;