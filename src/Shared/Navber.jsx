/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
// import { BsPersonCircle } from 'react-icons/bs';

// TODO: logo name 

const Navber = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user)


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .then(error => console.log(error))
    }

    return (
        <div className=''>
            <div className="flex justify-between navbar bg-gray-500">
                <div className="">
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div>
                    <ul className='flex gap-5'>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/instructors'>Instructors</NavLink></li>
                        <li><NavLink to='/classes'>Classes</NavLink></li>
                        <li><NavLink to='/dashboard'>Dashboard </NavLink></li>
                        <li><NavLink to='/register'>Register</NavLink></li>
                        
                    </ul>
                </div>
                <div className="">

                    <div className="dropdown dropdown-end mx-5">
                        <label tabIndex={0} className='btn btn-ghost btn-circle '>
                            {
                                user ?
                                    <>
                                        <div className='w-10 rounded-full'>
                                            <img src={user?.photoURL} alt="" />
                                        </div>
                                    </> : <>
                                        <NavLink to='/login'><button className="btn btn-outline btn-success">Login</button></NavLink>
                                    </>
                            }
                        </label>

                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <button onClick={handleLogOut} className="btn btn-accent">Logout</button>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;