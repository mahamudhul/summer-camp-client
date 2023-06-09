/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';


const SocialLogIn = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);

                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }

                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        navigate(from, { replace: true });
                    })
            })
    }


    return (
        <div>
            <div className="divider"></div>
            <div className='w-full text-center my-4'>
                <button onClick={handleGoogleSignIn} className="btn btn-outline border-t-cyan-800 w-full">
                    <FaGoogle className='text-2xl'></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogIn;