import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import vice from "../public/vice.svg"
import  prime from "../public/prime.png"
import president from "../public/president.svg"

// import required modules
import { Autoplay } from "swiper";

export default function InfluencerSlider() {
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
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-96"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Prime_Minister_of_India_Narendra_Modi.jpg/449px-Prime_Minister_of_India_Narendra_Modi.jpg?20180714230449"
                        alt="image slide 1"
                        width={400}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-96"
                        src="https://vicepresidentofindia.nic.in/sites/default/files/shriJDhankhar.jpg"
                        alt="image slide 2"
                        width={400}
                    />
                </SwiperSlide>
                <SwiperSlide width={400}>
                    <img
                        className="object-fill w-full h-96"
                        src="https://www.aljazeera.com/wp-content/uploads/2022/07/2022-07-17T080746Z_1145479581_RC2KDV9JVMU9_RTRMADP_3_INDIA-ELECTION-PRESIDENT-2.jpg?resize=770%2C513"
                        alt="image slide 3"

                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}