import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from '../Assets/banner-new.jpg'
import banner2 from '../Assets/banner-new.2jpg.jpg'
import banner3 from '../Assets/banner3.jpg'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Swiperslider() {
  return (  
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* <SwiperSlide>
          <img src={banner1} alt='banner'/>
          <div className="container">
          <div className="banner-box">
            <div className="content text-wrap">
          <h1 className='display-5 fw-bold'>Faishon Create<br/>
             Good Lifestyle</h1>
             <p>A world class trendy faishon collections</p>
             <button className='bg-dark text-white rounded-5 border-0 py-2 px-4 shadow-lg'>Shop Now</button>
             </div>
             </div>
             </div>
        </SwiperSlide> */}
        <SwiperSlide>
        <img src={banner2} alt='banner'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={banner3} alt='banner'   />
        </SwiperSlide>
     
       
      </Swiper>
    </>
  );
}

