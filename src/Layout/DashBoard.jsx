/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    const isAdmin = false;
    const isInstructor = false;

    

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">


                    {/* Page content here */}
                    <Outlet></Outlet>

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>


                <div className="drawer-side bg-teal-200">
                    <label htmlFor="my-drawer-2 " className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-slate-300 text-base-content">




                        {/* Sidebar content here */}
                        {
                            isAdmin ? <>
                                <li><Link to='/dashboard/manageClasses'>Manage Classes</Link></li>
                                <li><Link to='/dashboard/manageUsers'>Manage Users</Link></li>
                            </> : isInstructor ? <>
                                <li><Link to='/dashboard/addClass'>Add a Class</Link></li>
                                <li><Link to='/dashboard/myClasses'>My Classes</Link></li>
                            </> : <>
                                <li><Link to='/dashboard/mySelectedClass'>My Selected Classes</Link></li>
                                <li><Link to='/dashboard/myEnrolledClasses'>My Enrolled Classes</Link></li>
                                <li><Link to='/dashboard/payment'>Payment</Link></li>
                                <li><Link to='/dashboard/paymentHistory'>Payment history</Link></li>
                            </>
                        }

                        <div className="divider"></div>
                        <li><Link to='/'>Home</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;