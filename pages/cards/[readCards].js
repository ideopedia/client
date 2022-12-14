import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Axios from "axios";
import acess from "../../public/access.jpg"
import Loader from "../../components/loader";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import leftarr from "../../public/leftarrow.svg";
import SummaryCard from "../../components/SummaryCard";
import Image from "next/image";
import { getCookie } from "cookies-next";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function ReadCard() {
  const [data, setData] = useState(false);
  const router = useRouter();
  const {user,book} = router.query;
  // const array = favo.readCards?favo.readCards.split(":"):null
  // var id = array[1];

  useEffect(() => {
    Axios.post("/api/summaryCard/findSummaryCard", {
      Book_id: book,
    }).then((data) => {
      setData(data.data);
    });
    console.log(data);
  }, []);
  return (
    <>
      <div className="">
        <Navbar />
        <div
          className="flex justify-start items-center pl-4 pr-4 pt-4 pb-1 cursor-pointer"
          onClick={function handleBack() {
            router.push(`/desc/${book}?user=${user}&book=${book}`);
          }}
        >
          <Image src={leftarr} />
        </div>
        <div className="pb-5 ">
          {console.log(data)}
          {data && getCookie('user') ? (
            <Swiper
              effect={"cube"}
              grabCursor={true}
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              }}
              pagination={true}
              modules={[EffectCube, Pagination]}
              className="mySwiper w-12/12 md:w-6/12 xl:w-4/12 lg:w-4/12 "
              style={{ height: "90vh" }}
            >
              {data.Card.map((val, n) => (
                <SwiperSlide key={n}>
                  <SummaryCard
                    style_id={val.style_id}
                    name={data.Book_name}
                    content={val.content}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div>
            {console.log("wait")}
            </div>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}
