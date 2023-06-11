/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navber from '../Shared/Navber';
import Footer from '../Shared/Footer';
import UseAdmin from '../Hooks/UseAdmin';
import UseInstructors from '../Hooks/UseInstructors';

const DashBoard = () => {
    // const isAdmin = false;
    const [isAdmin] = UseAdmin()
    const [isInstructor] = UseInstructors()
    // const isInstructor = false;



    return (
        <div>
            <div >
                <Navber></Navber>
            </div>



            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col  justify-center mx-10">


                    {/* Page content here */}
                    <Outlet></Outlet>

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>


                <div className="drawer-side bg-teal-200">
                    <label htmlFor="my-drawer-2 " className="drawer-overlay"></label>
                    <ul className="menu p-4 w-70 h-full bg-slate-300 text-base-content gap-5 text-xl font-bold">



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

                                <li><Link to='/dashboard/paymentHistory'>Payment history</Link></li>
                            </>
                        }


                        {/* <div className="divider mt-0"></div>

                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/instructors'>All Instructors</Link></li>
                        <li><Link to='/classes'>All Classes</Link></li> */}
                    </ul>
                </div>
            </div>


            <Footer></Footer>
        </div>
    );
};

export default DashBoard;