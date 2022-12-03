import React from "react";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import { Player } from "@lottiefiles/react-lottie-player";
import Axios from "axios";
import Footer from "../../components/footer";
import Loader from "../../components/loader";
import ReadCard from "../../components/readcard";
import bookicn from "../../public/bookicn.svg";
import arrow from "../../public/arrow.svg";
import cards from "../../public/cards.svg";
import downarr from "../../public/downarr.svg";
import ben1 from "../../public/ben1.svg";
import Navbar from "../../components/navbar";
import uparr from "../../public/uparrow.svg";
import ok from "../../public/ok.svg";
import before from "../../public/before.svg";
import beforetime from "../../public/timebefore.svg";
import time from "../../public/time.svg";
import send from "../../public/send.svg";
import Like from "../../components/Like";
import cart from "../../public/cart.svg";
import like from "../../public/like.svg";
import leftarr from "../../public/leftarrow.svg";
import arrowone from "../../public/arrowone.svg";
import arrowtwo from "../../public/arrowtwo.svg";
import arrowthree from "../../public/Arrow16.svg";
import arrowfour from "../../public/Arrow17.svg";
import aftertime from "../../public/timeafter.svg";
import airpods from "../../public/airpods.svg";
import DropdownComponent from "../../components/dropdown";
import Image from "next/image";
import Link from "next/link";
const Book = () => {
  const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);

    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addListener(updateTarget);

      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }

      return () => media.removeListener(updateTarget);
    }, []);

    return targetReached;
  };
  const isBreakpoint = useMediaQuery(1024);
  const [data, setData] = useState(false);
  const [arr, setArr] = useState(true);
  const [benarr, setBenarr] = useState(false);
  const [lik, setLike] = useState(false);
  const [tick, setTick] = useState(false);
  const router = useRouter();
  console.log(router.query);
  const { user, book } = router.query;
  // const array = favo.book ? favo.book.split(":"):null
  // console.log(array[0]);
  // console.log(array[1]);

  // var num = Number(array[1]);

  // const user = array[0];
  var num = Number(book);
  function handleClick() {
    setArr(!arr);
  }
  useEffect(() => {
    Axios.post("/api/prebook/findPrebook", {
      id: num,
    }).then((data) => {
      setData(data.data);
    });
    console.log(data);
  }, []);
  // useEffect(() => {
  //   fetch("/api/prebook/findPrebook", {
  //     method: "POST",

  //     body: JSON.stringify({ id: 1 }),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       console.log(data);
  //     });
  // }, []);

  console.log(arr);

  return (
    <div>
      {data ? (
        <div>
          <Navbar isLogedIn={true} user={user} />
          {console.log(data)}

          <div className="flex justify-center items-center pt-16">
            <div className="flex ">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1 lg:gap-7 ">
                <div className=" flex items-center justify-end">
                  <div
                    className="cursor-pointer mr-9 mb-9"
                    onClick={function handleLike() {
                      const fetchData = async () => {
                        const result = await Axios.post(
                          "/api/UserFavourites/addFavourites",
                          {
                            name: data.Book_Name,
                            image: data.Cover_image,
                            author: data.Book_Author,
                            percent: 30,
                            id: data.id,

                            User_Id: user,
                          }
                        );

                        setLike(result.data);
                      };

                      fetchData();
                    }}
                  >
                    {lik ? (
                      <div style={{ width: "50px", height: "50px" }}>
                        <Like inn="red" out="white" stroke="red" />
                      </div>
                    ) : (
                      <div style={{ width: "50px", height: "50px" }}>
                        <Like inn="none" out="white" stroke="black" />
                      </div>
                    )}
                  </div>
                </div>
                <div className=" flex items-center justify-center">
                  <div>
                    <Image src={data.Cover_image} width={350} height={350} />
                  </div>
                </div>
                <div className=" rounded-md flex items-center justify-center">
                  <span className="lg:text-[28px] sm:text-base text-green-500 font-medium">
                    IDEOS OF
                  </span>
                </div>
                <div className="rounded-md flex items-center justify-center">
                  <span className="lg:text-[34px] sm:text-base text-black text-center font-medium">
                    {data.Book_Name}
                  </span>
                </div>
                <div className=" rounded-md flex items-center justify-center">
                  <span className="lg:text-[24px] text-gray-500 italic font-medium">
                    {data.Book_Author}
                  </span>
                </div>
                <div className="rounded-md flex items-center justify-center mb-[5rem]">
                  <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    <div className="pl-2 text-center font-medium md:text-[18px] text-[16px]">
                      <div className="cont flex py-6">
                        <div className="mr-1.5 mt-1.5">
                          <Image src={bookicn} />
                        </div>
                        <Link
                          className=""
                          href={`/summary/10?user=${user}&ideo=10`}
                        >
                          Read
                        </Link>
                      </div>

                      <div className=" text-black mt-3">
                        {data.read_time} Minutes
                      </div>
                    </div>

                    <div className="pl-2 text-center font-medium md:text-[18px] text-[16px]">
                      <div className="cont flex py-6">
                        <div className="mr-1.5 mt-1.5">
                          <Image src={airpods} />
                        </div>
                        <Link
                          className=""
                          href={`/audio/${data.id}1?user=${user}&book=${data.id}1`}
                        >
                          Listen
                        </Link>
                      </div>
                      <div className=" text-black mt-3">
                        {data.listen_time} Minutes
                      </div>
                    </div>
                    <div className="  pl-2 text-center font-medium md:text-[18px]  text-[16px]">
                      <div className="cont flex py-6">
                        <div className="mr-1.5 mt-1.5">
                          <Image src={cards} />
                        </div>
                        <Link
                          className=""
                          href={`/cards/${data.id}?user=${user}&book=${data.id}`}
                        >
                          Cards
                        </Link>
                      </div>
                      <div className=" text-black mt-3 ">9 Cards</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="readDesc lg:px-[3rem] md:px-[2rem] lg:pt-[5rem] pt-[4rem]">
            <h1 className="text-xl  lg:text-[34px] md:text-[26px] text-[24px] mb-[2rem] descTopic font-medium uppercase">
              Description
            </h1>
            <div className="flex justify-center items-center picAndDesc">
              <div
                style={{ marginRight: "2rem", textAlign: "center" }}
                className="bkimg"
              >
                <Image
                  src={before}
                  width={300}
                  height={300}
                  className="bookImg"
                />
              </div>
              <div className="lg:text-[20px] md:text-[18px] sm:text-[16px] xl:leading-[197%] lg:leading-[197%] md:leading-[197%] sm:leading-[197%] leading-[197%] font-medium lg:text-left text-center sm:px-8 px-6">
                {data.Book_Description}
              </div>
            </div>
          </div>

          <div className="readDesc  pt-10 lg:px-[3rem] px-[0rem] lg:pb-[6rem] pb-[5rem]">
            <h1 className="text-xl  lg:text-[34px] md:text-[26px] text-[24px]  mb-[2rem] font-medium descTopic">
              ABOUT THE AUTHOR
            </h1>
            <div className="flex justify-between items-center picAndDesc">
              <div
                style={{ marginRight: "2rem", width: "10rem" }}
                className="authImg"
              >
                <Image
                  src={data.Author_image}
                  width={170}
                  height={170}
                  className="authimg"
                />
              </div>
              <div className="lg:text-[20px] md:text-[18px] sm:text-[16px] font-medium xl:leading-[197%] lg:leading-[197%] md:leading-[197%] sm:leading-[197%] leading-[197%] lg:text-left text-center sm:px-8 px-6">
                {data.About_Author}
              </div>
            </div>
          </div>
          <div className="tmesaved">
            <h1
              className="text-xl  lg:text-[34px] md:text-[26px] text-[24px] sm:text-left text-center uppercase font-medium pb-20 px-[3rem]"
              style={{ position: "relative", top: "4rem" }}
            >
              Time Saved
            </h1>

            <div className="py-[3rem] timeSaved ">
              <div className="flex items-center justify-around flexTime mx-auto">
                <div className=" rounded-md flex items-center justify-center">
                  <div>
                    <div className="wtf xl:text-center">
                      <Image src={beforetime} />
                    </div>

                    <div className="bg-green-500 high mt-[2rem]">
                      <div
                        className="text-white p-2 px-[2rem]"
                        style={{ width: "max-content" }}
                      >
                        <span className="text-[18px] font-medium">
                          Read {data.book_page} pages in{" "}
                          {data.original_read_time}
                          {"  "}
                          Hours
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" rounded-md flex items-center justify-center">
                  <div className="arrowOne">
                    <Image src={!isBreakpoint ? arrowone : arrowthree} />
                  </div>
                </div>
                <div className=" rounded-md flex items-center justify-center">
                  <div>
                    <h1 className="pl-5 text-center text-[26px] font-medium mr-[1.2rem]">
                      SAVE OVER{" "}
                    </h1>
                    <div className="timeClock">
                      <Image src={time} />
                    </div>
                    <h1 className="pl-5 text-center text-[26px] font-medium mr-[1.2rem]">
                      HOURS
                    </h1>
                  </div>
                </div>
                <div className=" rounded-md flex items-center justify-center">
                  <div className="arrowTwo">
                    <Image src={!isBreakpoint ? arrowtwo : arrowfour} />
                  </div>
                </div>
                <div className="  rounded-md flex items-center justify-center">
                  <div>
                    <div className="wtf xl:text-center">
                      <Image src={aftertime} />
                    </div>

                    <div className="bg-green-500 high mt-[2rem]">
                      <div
                        className="text-white p-2 px-[0.1rem] text-center"
                        style={{ width: "max-content" }}
                      >
                        <span className="text-[18px] font-medium ">
                          Read finely distilled Ideos in {data.read_time} min
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="benefits pt-[3rem] pb-[3rem]">
            <div className="benifits my-[2rem] sm:px-[3rem] px-[1rem]">
              <h1 className="lg:text-[34px] md:text-[26px] text-[24px] uppercase pb-[2rem] sm:text-left text-center font-medium">
                benefits
              </h1>
              {data.benifits.map((val, n) => (
                <div className="pt-6 pb-6 " style={{ width: "100%" }} key={n}>
                  <DropdownComponent
                    name={n + 1 + ". " + val.name}
                    image={val.image}
                    content={
                      val.benifits[0] +
                      
                      val.benifits[1] +
                       
                      val.benifits[1]
                    }
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <hr />
            <div className="sm:px-[3rem] px-[1rem] sm:pt-20 sm:pb-20 pt-10 pb-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-2">
              <div
                className=" rounded-md flex items-center justify-start"
                onClick={handleClick}
              >
                <h1 className="lg:text-[34px] md:text-[26px] text-[24px] uppercase font-medium">
                  Contents
                </h1>
              </div>
              <div className="rounded-md flex items-center justify-end">
                {arr ? (
                  <Image
                    src={downarr}
                    className="cursor-pointer"
                    onClick={handleClick}
                    width={30}
                    height={30}
                  />
                ) : (
                  <Image
                    src={uparr}
                    className="cursor-pointer"
                    onClick={handleClick}
                    width={30}
                    height={30}
                  />
                )}
              </div>
            </div>

            {arr ? (
              <div
                className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5 pb-9 p-4"
                id="read"
              >
                {data.Ideos.map((idea, n) => (
                  <div
                    className="grid grid-cols-[20%_80%] gap-2 py-4 cursor-pointer bg-white drop-shadow-md"
                    onClick={function handleTick() {
                      router.push(
                        `/summary/${idea.Ideo_id}?user=${user}&ideo=${idea.Ideo_id}`
                      );
                    }}
                    key={n}
                  >
                    <div className=" rounded-md flex items-center justify-center h-auto lg:h-20 text-center">
                      <h1 className="xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[16px] font-medium">
                        {idea.Ideo_num}
                      </h1>
                    </div>
                    <div className=" rounded-md flex items-center justify-center h-auto lg:h-20 text-center">
                      <span className="lg:text-[24px] md:text-[20px] text-[16px] leading-relaxed font-medium">
                        {idea.name}
                      </span>
                    </div>

                    
                  </div>
                ))}
              </div>
            ) : (
              console.log("Error")
            )}
          </div>

          <div className="acclaimed pt-[4rem] pb-[3rem]">
            <div className="flex justify-center items-center sm:px-[3rem] px-[1rem]">
              <span className="text-xl  lg:text-[34px] md:text-[26px] text-[24px] lg:leading-[197%] md:leading-[197%] leading-[197%] sm:text-left text-center uppercase font-medium pb-20">
                {"The Book  " + data.Book_Name + " has been Acclaimed  by"}{" "}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-1 ">
              {data.Aclaimed.map((val, n) => (
                <div
                  className="p-4 rounded-md flex items-center justify-center"
                  key={n}
                >
                  <Image src={val} width={300} height={300} />
                </div>
              ))}
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <div className="load">
          {console.log("wait")}
        </div>
      )}
    </div>
  );
};

export default Book;
