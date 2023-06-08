/* eslint-disable no-unused-vars */
import React from 'react';
// import 'react-awesome-slider/dist/styles.css';

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";


// import required modules

// TODO: added football img and change swiper position
import { Pagination } from "swiper";

const Slider = () => {
    return (
        <div className='my-32 w-4/6 ms-auto mr-auto'>

            <div>
                <h1 className='text-center font-bold text-4xl mb-5'>All Category: </h1>
            </div>

            <Swiper
                slidesPerView={4}
                spaceBetween={0}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    
                    <img className='w-96 h-72' src="https://img.freepik.com/free-photo/full-shot-kids-playing-football-field_23-2149270949.jpg?size=626&ext=jpg&ga=GA1.2.525611491.1673846801&semt=ais" alt="" />
                    <h1 className='text-xl font-bold text-center m-3'>Football</h1>
                    </SwiperSlide>

                <SwiperSlide><img className='w-96 h-72' src="https://img.freepik.com/free-vector/stadium-cricket_1284-6362.jpg?size=626&ext=jpg&ga=GA1.1.525611491.1673846801&semt=ais" alt="" /></SwiperSlide>


                <SwiperSlide><img className='w-96 h-72' src="https://img.freepik.com/premium-vector/basketball-dribble-dark-flame-silhouette_9245-116.jpg?size=626&ext=jpg&ga=GA1.2.525611491.1673846801&semt=ais" alt="" /></SwiperSlide>

                <SwiperSlide><img className='w-96 h-72' src="https://img.freepik.com/free-photo/tennis-paddles-balls-arrangement_23-2149434236.jpg?size=626&ext=jpg&ga=GA1.2.525611491.1673846801&semt=ais" alt="" /></SwiperSlide>

                <SwiperSlide><img className='w-96 h-72' src="https://img.freepik.com/free-vector/baseball-background-design_1198-299.jpg?size=626&ext=jpg&ga=GA1.1.525611491.1673846801&semt=ais" alt="" /></SwiperSlide>

                <SwiperSlide><img className='w-96 h-72' src="https://img.freepik.com/free-vector/gradient-swimming-logo-template_23-2149371045.jpg?size=626&ext=jpg&ga=GA1.2.525611491.1673846801&semt=ais" alt="" /></SwiperSlide>

                <SwiperSlide><img className='w-96 h-72' src="https://img.freepik.com/premium-vector/boxing-club-logo-template_152437-45.jpg?size=626&ext=jpg&ga=GA1.1.525611491.1673846801&semt=ais" alt="" /></SwiperSlide>

                <SwiperSlide><img className='w-96 h-72' src="https://img.freepik.com/free-vector/hand-drawn-volleyball-silhouette_23-2149397214.jpg?size=626&ext=jpg&ga=GA1.1.525611491.1673846801&semt=ais" alt="" /></SwiperSlide>

                <SwiperSlide><img className='w-96 h-72' src="https://img.freepik.com/free-vector/ice-hockey-poster_98292-449.jpg?size=626&ext=jpg&ga=GA1.1.525611491.1673846801&semt=ais" alt="" /></SwiperSlide>
            </Swiper>
        </div>

    );
};

export default Slider;