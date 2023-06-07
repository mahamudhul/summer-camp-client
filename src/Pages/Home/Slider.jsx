/* eslint-disable no-unused-vars */
import React from 'react';
// import 'react-awesome-slider/dist/styles.css';

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

const Slider = () => {
    return (
        <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide><img src="https://media.photographycourse.net/wp-content/uploads/2021/10/08151023/beginner-photography-course-girl-camera-scaled.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://media.photographycourse.net/wp-content/uploads/2021/10/08151023/beginner-photography-course-girl-camera-scaled.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://media.photographycourse.net/wp-content/uploads/2021/10/08151023/beginner-photography-course-girl-camera-scaled.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://media.photographycourse.net/wp-content/uploads/2021/10/08151023/beginner-photography-course-girl-camera-scaled.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://media.photographycourse.net/wp-content/uploads/2021/10/08151023/beginner-photography-course-girl-camera-scaled.jpg" alt="" /></SwiperSlide>
            
        </Swiper>

    );
};

export default Slider;