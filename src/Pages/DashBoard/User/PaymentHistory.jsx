/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../Provider/AuthProvider';
import PaymentHistoryDetails from './PaymentHistoryDetails';

const PaymentHistory = () => {
    const { loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data: payments = [], refetch } = useQuery({

        queryKey: ['payments'],
        enabled: !loading,

        queryFn: async () => {
            const res = await axiosSecure('/payments');
            refetch()
            return res.data;

        }
    })

    console.log(payments)



    return (
        <div>
            <h1>All Our Payment List here </h1>
           
            <div>
                {
                    payments.map((payment, index) => 
                    <div key={payment._id} className="overflow-x-auto">
                        <table className="table">
                            {/* head */}

                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>price</th>
                                    <th>date</th>
                                </tr>
                            </thead>
                            <tbody>

                                {/* row 1 */}
                                <tr className="bg-base-200">
                                    <th>{index + 1}</th>
                                    <td>{payment.email}</td>
                                    <td>$ {payment.price}</td>
                                    <td>{payment.quantity}</td>
                                    <td>{payment.date}</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PaymentHistory;