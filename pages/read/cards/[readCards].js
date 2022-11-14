import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Axios from "axios";
import Loader from "../../../components/loader";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import leftarr from "../../../public/leftarrow.svg";
import SummaryCard from "../../../components/SummaryCard";
import Image from "next/image";

export default function ReadCard() {
  const [data, setData] = useState(false);
  const router = useRouter();
  const { card } = router.query;
  var id = String(card);
  useEffect(() => {
    Axios.post("http://localhost:3000/api/summaryCard/findSummaryCard", {
      Book_id: "1",
    }).then((data) => {
      setData(data.data);
    });
    console.log(data);
  }, []);
  return (
    <>
      <div className="">
        <div
          className="flex justify-start items-center pl-4 pr-4 pt-4 pb-1 cursor-pointer"
          onClick={function handleBack() {
            router.push("/read/1");
          }}
        >
          <Image src={leftarr} />
        </div>
        <div className="">
          {console.log(data)}
          {data ? (
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
                <SwiperSlide>
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
              <Loader />
            </div>
          )}
        </div>
      </div>
    </>
  );
}