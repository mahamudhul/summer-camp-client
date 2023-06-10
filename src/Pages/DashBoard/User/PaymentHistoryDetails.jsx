/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const PaymentHistoryDetails = ({ payment, index }) => {
    const { email, date, price, quantity} = payment
    // console.log(payment)


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* row 1 */}
                        <tr className="bg-base-200">
                            <th>{index + 1}</th>
                            <td>{email}</td>
                            <td>{price}</td>
                            <td>{quantity}</td>
                            <td>{date}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistoryDetails;