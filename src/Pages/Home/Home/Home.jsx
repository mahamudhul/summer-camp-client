/* eslint-disable no-unused-vars */
import React from 'react';
import Slider from './Slider';
import PopularSection from './PopularSection';
import PopularInstructors from './PopularInstructors';
import Banner from './Banner';
import Feature from '../../../Component/Feature';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Slider></Slider>
            <PopularInstructors></PopularInstructors>
            <PopularSection></PopularSection>
            <Feature></Feature>
        </div>
    );
};

export default Home;