/* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

const Instructors = () => {
    // const [instructors, setInstructors] = useState([])

    // // console.log(instructors)
    // useEffect(() => {
    //     fetch('http://localhost:5000/instructors')
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data)
    //             setInstructors(data)
    //         })
    // }, [])


    const { data: instructors = [] } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/instructors');
            return res.json();
        }
    })


    

    // TODO:  style innstructor card component

    return (
        <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 my-20 ms-10 '>
                {
                    instructors.map((instructor, index) =>

                        <div key={index} className="card card-compact w-96 h-96  bg-base-100 shadow-xl group">
                            <figure><img className='group hover:scale-110 transition' src={instructor.image} alt="instuctors" /></figure>

                            <div className="card-body mt-5">
                                <h2 className="card-title">{instructor.name}</h2>
                                <h2> <span className='font-bold '>Email:</span> Email: {instructor.email}</h2>
                                <div className="card-actions justify-start">
                                    <button className="btn btn-accent btn-outline mt-5">Details</button>
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