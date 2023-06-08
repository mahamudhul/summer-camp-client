/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const ClassDetails = ({ cl }) => {
    // console.log(cl)
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img className='h-96' src={cl.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{cl.name}</h2>
                    <p>Instructor: {cl.instructor}</p>
                    <p>Available Seat: {cl.availableSeats}</p>
                    <p>Price: $ {cl.price}</p>
                    <div className="card-actions justify-start mt-3">
                        <button className="btn btn-accent btn-outline">Details</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ClassDetails;