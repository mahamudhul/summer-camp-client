/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const Private = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();


    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>

    }

    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }}></Navigate>
        ;
};

export default Private;