/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';


const SocialLogIn = () => {
    const { googleSignIn } = useContext(AuthContext)


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
            })
    }


    return (
        <div>
            <div className="divider"></div>
            <div className='w-full text-center my-4'>
                <button  onClick={handleGoogleSignIn} className="btn btn-outline border-t-cyan-800 w-full">
                    <FaGoogle className='text-2xl'></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogIn;