/* eslint-disable no-unused-vars */
import React from 'react';
import { BiSelectMultiple } from 'react-icons/bi';
import { BsStar } from 'react-icons/bs';
import { TfiSignal } from 'react-icons/tfi';


const Feature = () => {
    return (
        <div className='flex justify-around mx-10 gap-5 my-10 bg-slate-500 bg-opacity-50 p-10 rounded-lg shadow-xl'>
            <div className='text-center'>
                <div className='flex justify-center'>
                    <BiSelectMultiple className='text-2xl mb-5'></BiSelectMultiple>
                </div>

                <h1 className='font-bold text-xl mb-3'>FREE 7 DAYS ENROLL</h1>
                <p className='text-sm'>Join our exclusive 7-day free class and unlock new skills. Dive into immersive lessons, expert guidance, and transformative learning. Do not miss this limited-time opportunity!</p>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className='text-center'>
                <div className='flex justify-center'>
                    <BsStar className='text-2xl mb-5'></BsStar>
                </div>

                <h1 className='font-bold text-xl mb-3'>AMAZING SERVICE </h1>
                <p>Experience unparalleled excellence with our amazing service. We deliver impeccable solutions tailored to your needs, exceeding expectations and leaving you truly satisfied. Simply extraordinary</p>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className='text-center'>
                <div className='flex justify-center'>
                    <TfiSignal className='text-2xl mb-5'></TfiSignal>
                </div>

                <h1 className='font-bold text-xl mb-3'>REASONABLE FEES </h1>
                <p>Reasonable fees provide affordable access to quality services, offering fair pricing without compromising on value, ensuring clients receive excellent outcomes without excessive financial burden.</p>
            </div>
        </div>
    );
};

export default Feature;