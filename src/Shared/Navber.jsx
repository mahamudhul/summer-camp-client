/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// import { BsPersonCircle } from 'react-icons/bs';

// TODO: logo name 

const Navber = () => {
    return (
        <div className=''>
            <div className="flex justify-between navbar bg-gray-500">
                <div className="">
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div>
                    <ul className='flex gap-5'>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/'>Instructors</NavLink></li>
                        <li><NavLink to='/'>Classes</NavLink></li>
                        <li><NavLink to='/'>Dashboard </NavLink></li>
                        <li><NavLink to='/login'>Login </NavLink></li>
                    </ul>
                </div>
                <div className="">

                    <div className="dropdown dropdown-end">
                        <label className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://i.ibb.co/2qgrkBj/AJEKE2474.jpg" />
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;