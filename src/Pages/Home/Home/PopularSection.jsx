/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const PopularSection = () => {
    const [classes, setClasses] = useState([])

    // console.log(classes)
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                // console.log(data.slice(0,6))
                setClasses(data.slice(0, 6))
            })
    }, [])



    // TODO: show 6 classes data by sorting
    return (
        <div className='ms-10'>
            <div className='divider'>
                <p className='text-center text-3xl font-bold underline underline-offset-8'>OUR Classes</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 my-20 mr-10'>
                {
                    classes.map((cl, index) =>
                        <div key={index}>
                            <div className="card w-full bg-base-100 shadow-xl ">
                                <figure><img className='h-80' src={cl.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{cl.name}</h2>
                                    <p>Instructor: {cl.instructor}</p>
                                    <p>Available Seat: {cl.availableSeats}</p>
                                    <p>Price: $ {cl.price}</p>
                                    <div className="card-actions justify-start mt-5">
                                        <button className="btn btn-accent btn-outline">See more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default PopularSection;