/* eslint-disable no-unused-vars */
import React from 'react';
import UsePayment from '../../../Hooks/UsePayment';

const MyEnrolledClasses = () => {
    const [payments] = UsePayment();
    console.log(payments)

    const PaymentItems = payments[0].itemNames;
    console.log(payments[0].itemNames)


    return (
        <div>
            <h1>Enrolled Class </h1>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>name</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            PaymentItems.map((item, index) => <tr key={index} className="bg-base-200">
                                <th>{index + 1}</th>
                                <td className='text-xl font-bold'>{item}</td>
                                <td>Payment Succeeded</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyEnrolledClasses;