/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import img from '../assets/undraw_page_not_found_re_e9o6 (1).svg'

const ErrorPage = () => {
    const { error, status } = useRouteError();



    return (
        <div>
            <section className='flex items-center h-full px-20 pt-20  '>
                <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                    <img src={img} alt="" />
                    <div className=' text-center mt-20'>
                        <p className='text-2xl font-semibold md:text-3xl border border-spacing-2 border-gray-500 m-20 p-5 rounded-md text-orange-700'>
                               {error?.message} 
                        </p>
                        <button className="btn btn-outline btn-success mt-20"><Link
                            to='/'>
                            go to homepage
                        </Link></button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;