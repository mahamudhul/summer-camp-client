/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const ClassDetails = ({ cl }) => {
    // console.log(cl)
    return (
        <div>
            <div className="card w-96 h-96 bg-base-100 shadow-xl">
                <figure><img src={cl.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>Instructor: {cl.instructor}</p>
                    <p>Available Seat: {cl.availableSeats}</p>
                    <p>Price: $ {cl.price}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-accent btn-outline">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ClassDetails;