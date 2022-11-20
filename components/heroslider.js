import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Player } from '@lottiefiles/react-lottie-player';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function SliderComponent() {
    return (
        < >
            
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}


                    modules={[Autoplay]}
                    className="mySwiper "
                >
                   
                    <SwiperSlide className="cim ">
                        <Player
                            autoplay
                            loop
                            src="https://assets2.lottiefiles.com/private_files/lf30_ipvphpwo.json"
                            style={{ height: '380px', width: '380px' }}
                            className="cim pr-9"
                        >
                        </Player>
                    </SwiperSlide>
                    
                </Swiper>
            
        </>
    );
}
