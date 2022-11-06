import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import TestSlides from "./testSlides";
import testimage1 from "../public/testimage1.svg"; // Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import sliderimagetest from "../public/sliderimagetest.png";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function SliderComponent() {
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
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={sliderimagetest} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sliderimagetest} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sliderimagetest} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
