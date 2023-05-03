import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import main11 from '../assets/main11.png';
import main11A from '../assets/main11A.png';
import main11B from '../assets/main11B.png';
import main11C from '../assets/main11C.png';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper";

export default function Swiper1(props) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            376: {
                slidesPerView: 1,
                spaceBetween: 20,
              },

            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}

        modules={[FreeMode, Pagination]}
        className="mySwiper "
      >
        <SwiperSlide  className="flex flex-col">
            <img src={main11} alt="" />
            <h1  className="text-[#72787D] font-[500] xl:w-[30%] py-[30px]">{props.h1}</h1>
        </SwiperSlide>
        <SwiperSlide  className="flex flex-col py-[25px]">
        <img src={main11A} alt="" />
        <h1 className="text-[#72787D] font-[500] xl:w-[30%] py-[30px]">{props.h2}</h1>
        </SwiperSlide>
        <SwiperSlide  className="flex flex-col py-[20px]">
        <img src={main11B} alt="" />
        <h1  className="text-[#72787D] font-[500] xl:w-[30%] py-[30px]">{props.h3}</h1>
        </SwiperSlide>
        <SwiperSlide  className="flex flex-col py-[20px]">
        <img src={main11C} alt="" />
        <h1  className="text-[#72787D] font-[500] xl:w-[30%] py-[30px]">{props.h1}</h1>
        </SwiperSlide>
        <SwiperSlide  className="flex flex-col py-[20px]">
        <img src={main11} alt="" />
        <h1 className="text-[#72787D] font-[500] xl:w-[30%] py-[30px]">{props.h1}</h1>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
