/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';


const PopularInstDetails = ({instructor}) => {



    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl h-96" >
                <figure><img src={instructor.image} alt="instuctors" /></figure>

                <div className="card-body mt-5">
                    <h2 className="card-title">{instructor.name}</h2>
                    <h2> <span className='font-bold '>Email:</span> Email: {instructor.email}</h2>
                    <div className="card-actions justify-start mt-3">
                        <button className="btn btn-accent btn-outline mt-5">View details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularInstDetails;