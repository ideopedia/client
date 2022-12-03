import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import TestSlides from "./testSlides";
import testslide1 from "../public/testslide1.svg"; // Import Swiper styles
import testslide2 from "../public/testslide2.svg"; // Import Swiper styles
import testslide3 from "../public/testslide3.svg"; // Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

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
          <div className="w-full">
            <Image src={testslide1} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <Image src={testslide2} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <Image src={testslide3} />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
