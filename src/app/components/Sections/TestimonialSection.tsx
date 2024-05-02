"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../../layout.css';

// import required modules
import { Pagination } from 'swiper/modules';
import TestimonialCard from '../MiniComponents/TestimonialCard';

export default function TestimonialSection() {
  return (
    <>
    <div className="container py-12">
    <div className="flex justify-center items-center">
          <span className="text-xl relative font-body text-primary after:absolute after:-right-12 after:top-1/2 after:-translate-y-1/2 after:w-10 after:h-0.5 after:bg-primary before:absolute before:top-1/2 before:-left-12 before:-translate-y-1/2 before:w-10 before:h-0.5 before:bg-primary">
          Testimonial
          </span>
        </div>
        <h2 className="text-[40px] mb-6 font-medium text-secondary text-center">
        Our Clients Say!!!
        </h2>
    <Swiper   pagination={{
          clickable: true,
        }} modules={[Pagination]} spaceBetween={50}
        slidesPerView={3} draggable={true} loop={true} className="mySwiper">
        <SwiperSlide><TestimonialCard/></SwiperSlide>
        <SwiperSlide><TestimonialCard/></SwiperSlide>
        <SwiperSlide><TestimonialCard/></SwiperSlide>
        <SwiperSlide><TestimonialCard/></SwiperSlide>
        <SwiperSlide><TestimonialCard/></SwiperSlide>
        <SwiperSlide><TestimonialCard/></SwiperSlide>
      </Swiper>



    </div>
    </>
  );
}
