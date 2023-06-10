// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from 'react-query';

const UsePayment = () => {
    const { loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data: payments = [], refetch } = useQuery({

        queryKey: ['payments'],
        enabled: !loading,

        queryFn: async () => {
            const res = await axiosSecure('/payments');
            refetch()
            return res.data;

        }
    })

    return [payments, loading];
};

export default UsePayment;