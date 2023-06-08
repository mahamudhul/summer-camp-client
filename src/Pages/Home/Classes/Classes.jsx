/* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import ClassDetails from './ClassDetails';
import { key } from 'localforage';

const Classes = () => {

    // const [classes, setClasses] = useState([])

    // // console.log(classes)
    // useEffect(() => {
    //     fetch('http://localhost:5000/classes')
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data)
    //             setClasses(data)
    //         })
    // }, [])


    const { data: classes = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/classes');
            return res.json();
        }
    })


    return (
        <div>
            <div>

            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 my-20 ms-10'>
                {
                    classes.map((cl, index) => <ClassDetails key={index} cl={cl}></ClassDetails>)
                }
            </div>

        </div>
    );
};

export default Classes;