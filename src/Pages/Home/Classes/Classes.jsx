/* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import ClassesDetails from './ClassesDetails';
import UseClasses from '../../../Hooks/UseClasses';

const Classes = () => {
    const [classes] = UseClasses()
    // console.log(classes)


    return (
        <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 my-20 ms-10'>
                {
                    classes.map((cl, index) => <ClassesDetails key={index} cl={cl}></ClassesDetails>)
                }
            </div>

        </div>
    );
};

export default Classes;