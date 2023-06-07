/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const Instructors = () => {
    const [instructors, setInstructors] = useState([])

    // console.log(instructors)
    useEffect(() => {
        fetch('instructors.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setInstructors(data)
            })
    }, [])


    

    return (
        <div>
            <h1>this instructors pages</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 my-20'>
                {
                    instructors.map((instructor, index) =>

                        <div key={index} className="card card-compact w-96 h-96  bg-base-100 shadow-xl">
                            <figure><img src={instructor.image} alt="instuctors" /></figure>

                            <div className="card-body mt-5">
                                <h2 className="card-title">{instructor.name}</h2>
                                <h2> <span className='font-bold '>Email:</span> Email: {instructor.email}</h2>
                                <div className="card-actions justify-center">
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

export default Instructors;