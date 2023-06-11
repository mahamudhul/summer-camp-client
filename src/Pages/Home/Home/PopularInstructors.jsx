/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PopularInstDetails from './PopularInstDetails';


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
        <div className='ms-10 mb-36' >
            <div className="divider">
                <p className='text-center text-3xl font-bold underline underline-offset-8'>OUR INSTRUCTORS</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5 my-20 mr-10'>


                {
                    instructors.map((instructor, index) =>

                        <PopularInstDetails key={index} instructor={instructor}></PopularInstDetails>
                    )
                }
            </div>
        </div>
    );
};

export default PopularInstructors;