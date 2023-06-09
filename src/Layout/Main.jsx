/* eslint-disable no-unused-vars */
import React from 'react';
import Navber from '../Shared/Navber';
import Footer from '../Shared/Footer';
import { Outlet } from 'react-router-dom';
import Banner from '../Pages/Home/Home/Banner';

const Main = () => {
    return (
        <div >
            <Navber ></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;