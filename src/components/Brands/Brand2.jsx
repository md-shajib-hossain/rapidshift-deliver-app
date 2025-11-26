import React from "react";
import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import brand1 from "../../assets/brands/amazon.png";
import brand2 from "../../assets/brands/amazon_vector.png";
import brand3 from "../../assets/brands/casio.png";
import brand4 from "../../assets/brands/moonstar.png";
import brand5 from "../../assets/brands/randstad.png";
import brand6 from "../../assets/brands/star.png";
import brand7 from "../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";

const Brand2 = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 1100,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={brand1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brand2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brand3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brand4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brand5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brand6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brand7} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Brand2;
