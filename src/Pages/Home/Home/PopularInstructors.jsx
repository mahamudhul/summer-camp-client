/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const PopularInstructors = () => {

    const [instructors, setInstructors] = useState([])

    // console.log(instructors)
    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setInstructors(data.slice(0, 6))
            })
    }, [])

    return (
        <div className='ms-10 mb-36'>
            <div>
                <p className='text-center text-3xl font-bold underline underline-offset-8'>OUR INSTRUCTORS</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5 my-20'>

                
                {
                    instructors.map((instructor, index) =>

                        <div key={index} className="card card-compact w-96 h-96  bg-base-100 shadow-xl">
                            <figure><img src={instructor.image} alt="instuctors" /></figure>

                            <div className="card-body mt-5">
                                <h2 className="card-title">{instructor.name}</h2>
                                <h2> <span className='font-bold '>Email:</span> Email: {instructor.email}</h2>
                                <div className="card-actions justify-start mt-3">
                                    <button className="btn btn-accent btn-outline mt-5">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default PopularInstructors;