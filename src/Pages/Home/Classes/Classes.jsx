/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import ClassDetails from './ClassDetails';
import { key } from 'localforage';

const Classes = () => {

    const [classes, setClasses] = useState([])

    // console.log(classes)
    useEffect(() => {
        fetch('classes.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setClasses(data)
            })
    }, [])


    return (
        <div>
            <div>
                <h1>All Classes</h1>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 my-20'>
                {
                    classes.map((cl,index) => <ClassDetails key={index} cl={cl}></ClassDetails>)
                }
            </div>

        </div>
    );
};

export default Classes;