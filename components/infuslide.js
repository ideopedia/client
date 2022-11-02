import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import vice from "../public/vice.svg"
import prime from "../public/prime.png"
import president from "../public/president.svg"
import Image from "next/image";

// import required modules
import { Autoplay } from "swiper";

export default function InfluencerSliderleft() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}


                modules={[Autoplay]}
                className="mySwiper slide"
            >
                <SwiperSlide width={100} height={100}>
                    <Image
                        className="object-fill"
                        src={vice}
                        alt="image slide 1"
                        
                    />
                </SwiperSlide>
                <SwiperSlide width={100} height={100}>
                    <Image
                        className="object-fill"
                        src={prime}
                        alt="image slide 2"
                            
                    />
                </SwiperSlide>
                <SwiperSlide width={100} height={100}>
                    <Image
                        className="object-fill"
                        src={president}
                        alt="image slide 3"

                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}