import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import img1 from "../../assets/banner1.jpg";
import img2 from "../../assets/banner2.png";
import img3 from "../../assets/banner3.png";
import {FaLongArrowAltRight} from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Banner.css";

// import required modules
import {Pagination} from "swiper";

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
          <div className="w-full relative bg-black">
            <img className="opacity-60" src={img1} alt="" />
            <div className="absolute top-4 md:top-1/3 text-white md:left-36">
              <h3 className="md:text-6xl text-4xl font-semibold mb-4 ">
                Unlock the World of <span className="">Languages</span>
              </h3>
              <p className="text-gray-200">
                Discover the Power of Multilingual Communication
              </p>
              <button className="btn btn-primary mt-4">
                <FaLongArrowAltRight></FaLongArrowAltRight> Get started now!
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full relative bg-black">
            <img className="opacity-60" src={img2} alt="" />
            <div className="absolute top-4 md:top-1/3 text-white md:left-36">
              <h3 className="md:text-6xl text-4xl font-semibold mb-4 ">
              
              Discover, Refine, Conquer, Succeed
              </h3>
              <p className="text-gray-200">
              Interactive Lessons for Language Proficiency
              </p>
              <button className="btn btn-primary mt-4">
                <FaLongArrowAltRight></FaLongArrowAltRight>See the course offer!
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full relative bg-black">
            <img className="opacity-60" src={img3} alt="" />
            <div className="absolute top-4 md:top-1/3 text-white md:left-36">
              <h3 className="md:text-6xl text-4xl font-semibold mb-4 ">
              Language Learning Made Easy
              </h3>
              <p className="text-gray-200">
              Personalized Approach for Rapid Progress
              </p>
              <button className="btn btn-primary mt-4">
                <FaLongArrowAltRight></FaLongArrowAltRight> See how to sign Up!
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
