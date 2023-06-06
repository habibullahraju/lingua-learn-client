import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../../assets/banner1.jpg'
import img2 from '../../assets/banner2.png'
import img3 from '../../assets/banner3.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Banner.css";

// import required modules
import { Pagination } from "swiper";


const Banner = () => {
    return (
        <div>
            <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img className='min-h-16' src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img3} alt="" />
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Banner;