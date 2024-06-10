import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
// import { Swiper } from 'swiper/types';


const Banner = () => {
    return (
        <div className=' mt-40' >
             <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> 
            <img src="https://media.istockphoto.com/id/1929345158/photo/modern-apartment-with-large-windows.jpg?s=1024x1024&w=is&k=20&c=BPU6q-8EwLIfG63zB0V-pYyxFbtPxNtfFFs8cLchyn8=" alt="" /></SwiperSlide>
        <SwiperSlide> 
            <img src="https://media.istockphoto.com/id/1421422160/photo/interior-of-living-room.jpg?s=2048x2048&w=is&k=20&c=m7-y_DgNIXf3omxQFBREkFeEgq4u13hrCN6wJtoTLpc=" alt="" /></SwiperSlide>
        <SwiperSlide>
             <img src="https://media.istockphoto.com/id/1397005250/photo/living-and-dining-room-interior.jpg?s=1024x1024&w=is&k=20&c=ENmmFXM0kNhNFhBEFtSxPKP2Xf1bshb88mbPWkrP5Qw=" alt="" /></SwiperSlide>
        <SwiperSlide> <img src="https://media.istockphoto.com/id/1929345158/photo/modern-apartment-with-large-windows.jpg?s=1024x1024&w=is&k=20&c=BPU6q-8EwLIfG63zB0V-pYyxFbtPxNtfFFs8cLchyn8=" alt="" /></SwiperSlide>
       
  </Swiper>
    
        </div>
    );
};

export default Banner;