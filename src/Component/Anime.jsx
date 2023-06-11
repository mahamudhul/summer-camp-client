/* eslint-disable no-unused-vars */
import React from 'react';
import { useTypewriter } from 'react-simple-typewriter'
import img from '../assets/happy-tiny-people-near-huge-welcome-word-flat-illustration_74855-10808.avif'


const Anime = () => {

    const [text] = useTypewriter({
        words: ['WELCOME', 'TO SUMMER HAVEN', 'IT IS A TRUSTED AND ', 'MOST POPULAR SPORTS CAMP'],
        loop: 0
    })


    return (
        <div >
            <div className='App text-3xl font-serif  text-center my-10 text-slate-700'>
                <span>{text}</span>
            </div>

            <div className='mt-10'>
                <img src={img} alt="" />
            </div>
        </div>
    );
}


export default Anime;