/* eslint-disable no-unused-vars */
import React from 'react';
import { useQuery } from 'react-query';

const UseClasses = () => {


    const { refetch, data: classes = [], isLoading: loading, } = useQuery({
        queryKey: ['classes'],
        
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/classes');
            return res.json();
        }
    })


    return [classes, loading, refetch];
};

export default UseClasses;