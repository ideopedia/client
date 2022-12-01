import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Loader from "../../components/loader";
import Axios from "axios";
import bullet from "../../public/bullet.svg";
import Image from "next/image";
import BNavbar from "../../components/bgnavbar";
import font from "../../public/font.svg";
import YouTube from "react-youtube";
import fd from "../../public/fd.svg";
import gfd from "../../public/gfd.svg";
import buy from "../../public/buy.svg";
import gbuy from "../../public/gbuy.svg";
import sound from "../../public/sound.svg";
import close from "../../public/close.svg";
import Navbar from "../../components/navbar";
import dclose from "../../public/darkclose.svg";
import ProgressBar from "../../components/progress";
import user_notes from "../../public/user_notes.svg";
import forward from "../../public/forward.svg";
import backward from "../../public/backward.svg";
import darkad from "../../public/darkaudio.svg";
import darkb from "../../public/darkback.svg";
import darkc from "../../public/darkconc.svg";
import dark1 from "../../public/dark.svg";
import Radium, { StyleRoot } from "radium";
import light from "../../public/light.svg";
import darkfor from "../../public/darkfor.svg";
import darkfont from "../../public/darkfont.svg";
import forwhole from "../../public/forwardwh.svg";
import content from "../../public/content.svg";
import startq from "../../public/startq.svg";
import endq from "../../public/endq.svg";
const Read = () => {
  const [data, setData] = useState(false);
  const [conten, setContent] = useState(false);
  const [card, setCard] = useState(false);
  const [dark, setDark] = useState(true);
  const [notes, setNotes] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [rangeval, setRangeval] = useState(1);
  const [showNotesModal, setShowNotesModal] = React.useState(false);
  const [compdata, setCompData] = useState(false);
  const [showMod, setShowMod] = useState(false);
  const router = useRouter();
  const { user, ideo } = router.query;
  // const [num2, setNum1] = useState(ideo[0]);
  // const [num3, setNum2] = useState(ideo[1]);

  // const adid = favo.ideo;
  // const array = favo.ideo?favo.ideo.split(":"):null
  // console.log(array[0]);
  // console.log(array[1]);
  // var str = array[1];
  console.log(router.query);
  var num = Number(ideo);

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
  const userid = user;
  var fntsze = rangeval * 30;
  var num2 = Number(ideo ? ideo[0] : null);
  var num3 = Number(ideo ? ideo[1] : null);
  const d = new Date();
  const date = new Date();
  const ft = {
    "@media (min-width: 779px)": {
      fontSize: rangeval * 34,
    },
    "@media (max-width: 780px)": {
      fontSize: rangeval * 30,
    },
    "@media (max-width: 480px)": {
      fontSize: rangeval * 24,
    },
    "@media (max-width: 340px)": {
      fontSize: rangeval * 20,
    },
  };
  const cnt = {
    "@media (min-width: 779px)": {
      fontSize: rangeval * 24,
    },
    "@media (max-width: 780px)": {
      fontSize: rangeval * 20,
    },
    "@media (max-width: 480px)": {
      fontSize: rangeval * 18,
    },
  };

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;
  const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  console.log(week[d.getDay()]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios.post("/api/bookSummary/findSummary", {
        Ideo_id: num,
      });

      setData(result.data);
    };

    fetchData();
    console.log(data);
  }, []);
  useEffect(() => {
    const fetchPre = async () => {
      const result = await Axios.post("/api/prebook/findPrebook", {
        id: num2,
      });

      setContent(result.data);
    };

    fetchPre();
    console.log(conten);
  }, []);
  useEffect(() => {
    const fetchCard = async () => {
      const result = await Axios.post("/api/bookCard/findBookcard", {
        id: num2,
      });

      setCard(result.data);
    };

    fetchCard();
    console.log(card);
  }, []);

  return (
    <>
      {data && ideo ? (
        <div>
          {dark ? (
            <StyleRoot>
              <div className="pb-20">
                <Navbar />
                <ProgressBar />
                {console.log(data)}
                {console.log(card)}
                {console.log(conten)}
                <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 pb-1 px-[1.7rem]">
                  <div
                    className=" rounded-md flex items-center justify-start cursor-pointer"
                    onClick={function handleDesc() {
                      router.push(`/desc/${num2}?user=${userid}&book=${num2}`);
                    }}
                  >
                    <div className="ideoIcons">
                      <Image src={forward} width={30} height={30} />
                    </div>
                  </div>
                  <div className=" rounded-md flex items-center justify-center">
                    <div>
                      <div
                        className={`text-black font-semibold `}
                        //ideo
                      >
                        <span style={ft}>{data.Ideo_title}</span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-md flex items-center justify-end">
                    <div>
                      <div
                        className="p-2 RightIcons cursor-pointer"
                        onClick={() => setShowModal(true)}
                      >
                        <Image src={content} />
                      </div>
                      <div
                        className="p-2   RightIcons cursor-pointer"
                        onClick={() => setShowMod(true)}
                      >
                        <Image src={font} />
                      </div>
                      <div
                        className="p-2 RightIcons cursor-pointer"
                        onClick={function handleAudio() {
                          if ((ideo === "10")|| (ideo === "18")) {
                            router.push(`/audio/11?user=${userid}&book=11`);
                          } else {
                            router.push(
                              `/audio/${ideo}?user=${userid}&book=${ideo}`
                            );
                          }
                        }}
                      >
                        <Image src={sound} />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`flex justify-center items-center  text-green-500 font-semibold uppercase sm:pl-4 sm:pb-4  pb-6 sm:px-0 px-2 text-center `}
                  style={ft}
                  //heading
                >
                  {data.Ideo}
                </div>
                <div className="pb-4 ">
                  <Image src={data.Ideo_image} width={1500} height={700} />
                </div>
                <div></div>

                {data.Book_Summary[0].Ideo_Quest.map((dat, n) => (
                  <div key={n}>
                    {dat.length > 2 ? (
                      <div
                        className={`flex justify-center items-center  bg-neutral-300  font-semibold p-4  greyContent text-center `}
                        style={ft}
                      >
                        {dat}
                      </div>
                    ) : (
                      console.log("")
                    )}
                    <div className="">
                      <div className="py-4 px-6">
                        {data.Book_Summary[0].Content[n].map((val, n) => (
                          <div
                            className={`text-black  py-4 flex justify-center items-center leading-[197%] font-medium `}
                            key={n}
                            style={cnt}
                          >
                            {val}
                          </div>
                        ))}
                        {data.Book_Summary[0].images[n][0].length > 2 ? (
                          <div className="flex justify-center items-center px-4 py-16">
                            <Image
                              src={data.Book_Summary[0].images[n][0]}
                              width={300}
                              height={300}
                            />
                          </div>
                        ) : (
                          console.log(" ")
                        )}

                        {data.Book_Summary[0].Quotes[n].length > 1 ? (
                          <div className="flex justify-center items-center pb-8">
                            <div className="mx-[auto]">
                              <div className="text-left leftQuote">
                                <Image src={startq} />
                              </div>
                              <div
                                className={`text-green-500 sm:mx-[4rem] mx-[1rem] text-center leading-[197%] font-medium `}
                                //quotes
                                style={cnt}
                              >
                                {data.Book_Summary[0].Quotes[n]}
                              </div>
                              <div
                                className="rightQuote"
                                style={{
                                  display: "flex",
                                  justifyContent: "flex-end",
                                }}
                              >
                                <Image src={endq} />
                              </div>
                            </div>
                          </div>
                        ) : (
                          console.log("jd")
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {data.Ideo_Peaks.length > 1 ? (
                  <div>
                    <div
                      className={` text-black font-semibold sm:pl-4 sm:text-left text-center sm:pb-0 pb-5 uppercase lg:text-[${
                        rangeval * 34
                      }px] md:text-[${rangeval * 30}px] text-[${
                        rangeval * 24
                      }px] `}
                      //ideopeaks
                    >
                      Ideo Peaks
                    </div>
                    <div className="bg-green-100 sm:p-6 p-4 pb-7">
                      <div className="">
                        {data.Ideo_Peaks.map((val, n) => (
                          <div key={n}>
                            <div
                              style={{
                                position: "absolute",
                                marginTop: "0.7rem",
                              }}
                            >
                              <Image src={bullet} width={40} height={40} />
                            </div>
                            <div className=" p-4 ml-8">
                              <div className="pr-4">
                                <div className={`font-medium `} style={cnt}>
                                  {val.name}
                                </div>
                                <div
                                  className={` text-green-500 font-medium `}
                                  style={cnt}
                                  //action
                                >
                                  {val.quote}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  console.log("")
                )}

                {data.video ? (
                  <div className="w-[100%] h-[500px]">
                    <div
                      className={` text-black font-semibold sm:pl-4 sm:text-left text-center sm:pb-0 pb-5 uppercase lg:text-[${
                        rangeval * 34
                      }px] md:text-[${rangeval * 30}px] text-[${
                        rangeval * 24
                      }px] `}
                      //ideopeaks
                    >
                      Recommended Ted Talks
                    </div>
                    
                      <div className="flex justify-center items-center">
                        <YouTube videoId={data.video} opts={opts} />
                      </div>
                    

                    <div
                      className={` text-black font-semibold sm:pl-4 sm:text-left text-center sm:pb-0 pb-5 uppercase lg:text-[${
                        rangeval * 34
                      }px] md:text-[${rangeval * 30}px] text-[${
                        rangeval * 24
                      }px] `}
                      //ideopeaks
                    >
                      Like This Summary?
                    </div>
                    <div className="flex justify-start items-center pl-5 pt-7">
                      <div>
                        <Image src={buy} width={30} height={30} />
                      </div>
                      <div
                        className="pl-5 cursor-pointer"
                        style={cnt}
                        onClick={function handleTog() {
                          router.push(`${data.affliate}`);
                        }}
                      >
                        Buy Book On Amazon
                      </div>
                    </div>
                    <div className="flex justify-start items-center pl-5 pt-7">
                      <div>
                        <Image src={fd} width={30} height={30} />
                      </div>
                      <div
                        className="pl-5 cursor-pointer "
                        style={cnt}
                        nClick={function handleTog() {
                          router.push("/contact");
                        }}
                      >
                        Provide Feedback
                      </div>
                    </div>
                  </div>
                ) : null}
                <div className="fixed -bottom-7 w-[100%]">
                  <div className="bg-white drop-shadow rounded-lg -mb-9 mb-[1.5rem]">
                    <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2 p-4 ">
                      <div
                        className=" rounded-md flex items-center justify-start ideoIcons cursor-pointer"
                        onClick={
                          num3 !== 0
                            ? function handleForward() {
                                router.push(
                                  `/summary/${num2}${
                                    num3 - 1
                                  }?user=${userid}&ideo=${num2}${num3 - 1}`
                                );
                              }
                            : function handleForward() {
                                router.push(
                                  `/summary/${num2}${num3}?user=${userid}&ideo=${num2}${num3}`
                                );
                              }
                        }
                      >
                        <Image src={forward} />
                      </div>
                      <div className="rounded-md flex items-center justify-center progBar">
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                          <div
                            className="bg-green-600 h-1.5 rounded-full dark:bg-green-500 "
                            style={{
                              width: `${(data.Ideo_num / data.Total) * 100}%`,
                            }}
                          ></div>
                        </div>
                        <div className="text-base pl-4 pb-3 perc">
                          {Math.round((data.Ideo_num / data.Total) * 100) + "%"}
                        </div>
                      </div>
                      <div
                        className="rounded-md flex  justify-end cursor-pointer"
                        onClick={
                          num3 === 8
                            ? function handleBackward() {
                                router.replace(
                                  `/summary/${String(num2)}${String(
                                    num3
                                  )}?user=${userid}&ideo=${String(
                                    num2
                                  )}${String(num3)}`
                                );
                              }
                            : function handleBackward() {
                                Axios.post("/api/UserCompleted/addCompleted", {
                                  name: card.Book_Name,
                                  image: card.Cover_image,
                                  author: card.Book_Author,
                                  percent:
                                    Math.round(
                                      (data.Ideo_num / data.Total) * 100
                                    ) >= 80
                                      ? 100
                                      : Math.round(
                                          (data.Ideo_num / data.Total) * 100
                                        ),
                                  id: card.id,
                                  date: currentDate,
                                  User_Id: userid,
                                }).then((data) => {
                                  setCompData(data.data);
                                });
                                Axios.post("/api/UserDashboard/updateDash", {
                                  Activity: [
                                    4 * 8,
                                    8 * 8,
                                    12 * 8,
                                    16 * 1,
                                    7 * 5,
                                    4 * 9,
                                    10 * 6,
                                  ],
                                  User_Id: userid,
                                }).then((val) => {
                                  console.log(val);
                                });

                                router.replace(
                                  `/summary/${String(num2)}${String(
                                    num3 + 1
                                  )}?user=${userid}&ideo=${String(
                                    num2
                                  )}${String(num3 + 1)}`
                                );
                              }
                        }
                      >
                        <Image src={backward} />
                      </div>
                    </div>
                  </div>
                  {/* <Image
                  src={user_notes}
                  className="cursor-pointer"
                  onClick={() => setShowNotesModal(true)}
                /> */}
                  {/* <button
                  className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  
                >
                  Notes
                </button> */}
                  {showNotesModal ? (
                    <>
                      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                          {/*content*/}
                          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className=" p-5 border-b bg-yellow-300 border-solid border-slate-200 rounded-t">
                              <div className="flex items-center justify-center text-xl font-bold ">
                                {data.Ideo_title}
                              </div>
                              <div className="flex items-center justify-center  text-base text-black">
                                {data.Ideo}
                                <span
                                  className=" ml-5 text-sm text-green-800 cursor-pointer"
                                  onClick={function handleSavedNotes() {
                                    router.push(`/notes/${userid}`);
                                  }}
                                >
                                  Saved Notes
                                </span>{" "}
                              </div>
                            </div>
                            {/*body*/}
                            <div className="relative p-6 flex-auto">
                              <textarea
                                type="text"
                                placeholder="Type here ....."
                                className="focus:border-black"
                                rows="10"
                                cols="50"
                                onChange={(e) => setNotes(e.target.value)}
                              ></textarea>
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                              <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowNotesModal(false)}
                              >
                                Cancel
                              </button>
                              <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={function submitNotes() {
                                  Axios.post("/api/UserNotes/addNotes", {
                                    Book_Name: card.Book_Name,
                                    Author: card.Book_Author,
                                    Notes: notes,
                                    Book_id: card.id,

                                    User_Id: userid,
                                  }).then((data) => {
                                    setCompData(data.data);
                                  });
                                  setShowNotesModal(false);
                                }}
                              >
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                  ) : null}
                </div>
                {showMod ? (
                  <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                      <div className="relative w-auto my-6 mx-auto max-w-3xl ">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          {/*header*/}

                          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 pt-9">
                            <div className=" rounded-md flex items-center justify-end"></div>
                            <div className="p-4  rounded-md flex items-center justify-end cursor-pointer">
                              <div
                                className="pr-5"
                                onClick={() => setShowMod(false)}
                              >
                                <Image src={close} />
                              </div>
                            </div>
                          </div>

                          {/*body*/}
                          <div className="relative p-6 flex-auto">
                            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 ">
                              <div className=" rounded-md flex items-center justify-center">
                                <div
                                  className="cursor-pointer"
                                  onClick={function handleDark() {
                                    setDark(false);
                                  }}
                                >
                                  <Image src={dark1} />
                                </div>
                                <div
                                  className="pl-9 cursor-pointer"
                                  onClick={function handleDark() {
                                    setDark(true);
                                  }}
                                >
                                  <Image src={light} />
                                </div>
                              </div>
                              <div className="w-full  rounded-md flex items-center justify-center">
                                <div className="text-black text-base cursor-pointer">
                                  Aa
                                </div>
                                <div className="pl-3 pr-2">
                                  <input
                                    className="rounded-lg overflow-hidden appearance-none bg-gray-400 h-3 w-[200px] sm:w-[300px] md:w-[300px] lg:w-[300px]"
                                    type="range"
                                    min="1"
                                    max="1.4"
                                    value={rangeval}
                                    step="0.1"
                                    onChange={(event) =>
                                      setRangeval(event.target.value)
                                    }
                                  />

                                  {console.log(rangeval)}
                                </div>
                                <div className="text-black text-2xl cursor-pointer">
                                  Aa
                                </div>
                              </div>
                            </div>
                          </div>
                          {/*footer*/}
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}
                {showModal ? (
                  <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none top-10">
                      <div className="relative w-auto my-6 mx-auto max-w-3xl h-[100vh]">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          {/*header*/}

                          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 pt-9">
                            <div className=" rounded-md flex items-center justify-end">
                              <span className="text-2xl ">Contents </span>
                            </div>
                            <div className="p-4  rounded-md flex items-center justify-end cursor-pointer">
                              <div
                                className="pr-5"
                                onClick={() => setShowModal(false)}
                              >
                                <Image src={close} />
                              </div>
                            </div>
                          </div>

                          {/*body*/}
                          <div className="relative p-6 flex-auto">
                            <div
                              className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5 pb-9 p-4"
                              id="read"
                            >
                              {conten.Ideos.map((idea, n) => (
                                <div
                                  className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2 cursor-pointer bg-white "
                                  onClick={function handleTick() {
                                    router.push(
                                      `/summary/${idea.Ideo_id}?user=${userid}&ideo=${idea.Ideo_id}`
                                    );
                                  }}
                                  key={n}
                                >
                                  <div className="p-2rounded-md flex items-center justify-center ">
                                    <h1 className="text-sm lg:text-xl  ">
                                      {idea.Ideo_num}
                                    </h1>
                                  </div>
                                  <div className="p-2rounded-md flex items-center justify-start ">
                                    <span className="text-sm lg:text-xl">
                                      {idea.name}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          {/*footer*/}
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
            </StyleRoot>
          ) : (
            <StyleRoot>
              <div className="sm:p-4 pb-9 bg-black">
                <BNavbar />
                <ProgressBar />
                {console.log(data)}
                <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 pb-1 sm:px-[1.7rem] px-[0.8rem]">
                  <div
                    className=" rounded-md flex items-center justify-start cursor-pointer"
                    onClick={function handleDesc() {
                      router.push(`/desc/${num2}?user=${userid}&book=${num2}`);
                    }}
                  >
                    <div className="ideoIcons">
                      <Image src={forwhole} width={30} height={30} />
                    </div>
                  </div>
                  <div className=" rounded-md flex items-center justify-center">
                    <div>
                      <div className={`text-white font-semibold `} style={ft}>
                        {data.Ideo_title}
                      </div>
                    </div>
                  </div>
                  <div className="rounded-md flex items-center justify-end">
                    <div>
                      <div
                        className="p-2 RightIcons cursor-pointer"
                        onClick={() => setShowModal(true)}
                      >
                        <Image src={darkc} />
                      </div>
                      <div
                        className="p-2   RightIcons cursor-pointer"
                        onClick={() => setShowMod(true)}
                      >
                        <Image src={darkfont} />
                      </div>
                      <div
                        className="p-2 RightIcons cursor-pointer"
                        onClick={function handleAudio() {
                          if ((ideo === "10")|| (ideo === "18")){
                            router.push(
                              `/audio/11?user=${userid}&book=11`
                            );
                          }
                          else{
                            router.push(
                              `/audio/${ideo}?user=${userid}&book=${ideo}`
                            );
                          }
                        }}
                      >
                        <Image src={darkad} />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`flex justify-center items-center  text-green-500 font-semibold uppercase sm:pl-4 sm:pb-4  pb-6 sm:px-0 px-2 text-center  `}
                  style={ft}
                >
                  {data.Ideo}
                </div>
                <div className="pb-4">
                  <Image src={data.Ideo_image} width={1500} height={700} />
                </div>

                {data.Book_Summary[0].Ideo_Quest.map((dat, n) => (
                  <div key={n}>
                    {dat.length > 2 ? (
                      <div
                        className={`flex justify-center items-center text-white bg-gray-900  font-semibold p-4  greyContent text-center l `}
                        style={ft}
                      >
                        {dat}
                      </div>
                    ) : (
                      console.log("")
                    )}
                    <div className="">
                      <div className="py-4 px-6">
                        {data.Book_Summary[0].Content[n].map((val, n) => (
                          <div
                            className={` text-white py-4 flex justify-center items-center leading-[197%] font-medium `}
                            style={cnt}
                            key={n}
                          >
                            {val}
                          </div>
                        ))}
                        {data.Book_Summary[0].images[n][0].length > 2 ? (
                          <div className="flex justify-center items-center px-4 py-16">
                            <Image
                              src={data.Book_Summary[0].images[n][0]}
                              width={300}
                              height={300}
                            />
                          </div>
                        ) : (
                          console.log(" ")
                        )}

                        {data.Book_Summary[0].Quotes[n].length > 1 ? (
                          <div className="flex justify-center items-center pb-8">
                            <div className="mx-[auto]">
                              <div className="text-left leftQuote">
                                <Image src={startq} />
                              </div>
                              <div
                                className="text-green-500 sm:mx-[4rem] mx-[1rem] text-center leading-[197%] font-medium "
                                style={cnt}
                              >
                                {data.Book_Summary[0].Quotes[n]}
                              </div>
                              <div
                                className="rightQuote"
                                style={{
                                  display: "flex",
                                  justifyContent: "flex-end",
                                }}
                              >
                                <Image src={endq} />
                              </div>
                            </div>
                          </div>
                        ) : (
                          console.log("jd")
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {data.Ideo_Peaks.length > 1 ? (
                  <div>
                    <div
                      className=" text-white font-semibold sm:pl-4 sm:text-left text-center sm:pb-0 pb-5 uppercase  "
                      style={ft}
                    >
                      Ideo Peaks
                    </div>
                    <div className="bg-black sm:p-6 pb-7">
                      <div className="p-4">
                        {data.Ideo_Peaks.map((val, n) => (
                          <div key={n}>
                            <div
                              style={{
                                position: "absolute",
                                marginTop: "0.7rem",
                              }}
                            >
                              <Image src={bullet} width={40} height={40} />
                            </div>
                            <div className=" p-4 ml-8">
                              <div className="pr-4">
                                <div
                                  className={` text-white font-medium `}
                                  style={cnt}
                                >
                                  {val.name}
                                </div>
                                <div
                                  className={` text-green-500 font-medium  `}
                                  style={cnt}
                                >
                                  {val.quote}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  console.log("")
                )}
                {data.video ? (
                  <div className="w-[100%] h-[500px] p-4">
                    <div
                      className={` text-white font-semibold sm:pl-4 sm:text-left text-center sm:pb-0 pb-5 uppercase lg:text-[${
                        rangeval * 34
                      }px] md:text-[${rangeval * 30}px] text-[${
                        rangeval * 24
                      }px] `}
                      //ideopeaks
                    >
                      Recommended Ted Talks
                    </div>
                    <div className="flex justify-center items-center pb-9">
                      <div className="">
                        <YouTube videoId={data.video} opts={opts} />
                      </div>
                    </div>

                    <div
                      className={` text-white font-semibold sm:pl-4 sm:text-left text-center sm:pb-0 pb-5 uppercase lg:text-[${
                        rangeval * 34
                      }px] md:text-[${rangeval * 30}px] text-[${
                        rangeval * 24
                      }px] `}
                      //ideopeaks
                    >
                      Like This Summary?
                    </div>
                    <div className="flex justify-start items-center pl-5 pt-7">
                      <div>
                        <Image src={gbuy} width={30} height={30} />
                      </div>
                      <div
                        className="pl-5 cursor-pointer text-white "
                        style={cnt}
                        onClick={function handleTog() {
                          router.push(`${data.affliate}`);
                        }}
                      >
                        Buy Book On Amazon
                      </div>
                    </div>
                    <div className="flex justify-start items-center pl-5 pt-7">
                      <div>
                        <Image src={gfd} width={30} height={30} />
                      </div>
                      <div
                        className="pl-5 cursor-pointer text-white "
                        style={cnt}
                        nClick={function handleTog() {
                          router.push("/contact");
                        }}
                      >
                        Provide Feedback
                      </div>
                    </div>
                  </div>
                ) : null}
                <div className="fixed -bottom-7 w-[100%]">
                  <div>
                    <div className="bg-black drop-shadow rounded-lg -mb-9 mb-[1.5rem]">
                      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2 p-4 ">
                        <div
                          className=" rounded-md flex items-center justify-start ideoIcons cursor-pointer"
                          onClick={
                            num3 !== 0
                              ? function handleForward() {
                                  router.push(
                                    `/summary/${num2}${
                                      num3 - 1
                                    }?user=${userid}&ideo=${num2}${num3 - 1}`
                                  );
                                }
                              : function handleForward() {
                                  router.push(
                                    `/summary/${num2}${num3}?user=${userid}&ideo=${num2}${num3}`
                                  );
                                }
                          }
                        >
                          <Image src={darkfor} />
                        </div>
                        <div className="rounded-md flex items-center justify-center progBar">
                          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                            <div
                              className="bg-green-600 h-1.5 rounded-full dark:bg-green-500 "
                              style={{
                                width: `${(data.Ideo_num / data.Total) * 100}%`,
                              }}
                            ></div>
                          </div>
                          <div className="text-base text-white pl-4 pb-3 perc">
                            {Math.round((data.Ideo_num / data.Total) * 100) +
                              "%"}
                          </div>
                        </div>
                        <div
                          className="  flex cursor-pointer justify-end ideoIcons ml-[4rem]"
                          onClick={
                            num3 === 8
                              ? function handleBackward() {
                                  router.replace(
                                    `/summary/${String(num2)}${String(
                                      num3
                                    )}?user=${userid}&ideo=${String(
                                      num2
                                    )}${String(num3)}`
                                  );
                                }
                              : function handleBackward() {
                                  Axios.post(
                                    "/api/UserCompleted/addCompleted",
                                    {
                                      name: card.Book_Name,
                                      image: card.Cover_image,
                                      author: card.Book_Author,
                                      percent:
                                        Math.round(
                                          (data.Ideo_num / data.Total) * 100
                                        ) >= 80
                                          ? 100
                                          : Math.round(
                                              (data.Ideo_num / data.Total) * 100
                                            ),
                                      id: card.id,
                                      date: currentDate,
                                      User_Id: userid,
                                    }
                                  ).then((data) => {
                                    setCompData(data.data);
                                  });
                                  Axios.post("/api/UserDashboard/updateDash", {
                                    Activity: [
                                      4 * 8,
                                      8 * 8,
                                      12 * 8,
                                      16 * 1,
                                      7 * 5,
                                      4 * 9,
                                      10 * 6,
                                    ],
                                    User_Id: userid,
                                  }).then((val) => {
                                    console.log(val);
                                  });

                                  router.replace(
                                    `/summary/${String(num2)}${String(
                                      num3 + 1
                                    )}?user=${userid}&ideo=${String(
                                      num2
                                    )}${String(num3 + 1)}`
                                  );
                                }
                          }
                        >
                          <div className="flex justify-end items-center">
                            <Image src={darkb} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <Image
                  src={user_notes}
                  className="cursor-pointer"
                  onClick={() => setShowNotesModal(true)}
                /> */}
                  {/* <button
                  className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowNotesModal(true)}
                >
                  Notes
                </button> */}
                  {showNotesModal ? (
                    <>
                      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                          {/*content*/}
                          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className=" p-5 border-b bg-yellow-300 border-solid border-slate-200 rounded-t">
                              <div className="flex items-center justify-center text-xl font-bold ">
                                {data.Ideo_title}
                              </div>
                              <div className="flex items-center justify-center  text-base text-black">
                                {data.Ideo}
                                <span
                                  className=" ml-5 text-sm text-green-800 cursor-pointer"
                                  onClick={function handleSavedNotes() {
                                    router.push(`/notes/${userid}`);
                                  }}
                                >
                                  Saved Notes
                                </span>{" "}
                              </div>
                            </div>
                            {/*body*/}
                            <div className="relative p-6 flex-auto">
                              <textarea
                                type="text"
                                placeholder="Type here ....."
                                className="focus:border-black"
                                rows="10"
                                cols="50"
                                onChange={(e) => setNotes(e.target.value)}
                              ></textarea>
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                              <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowNotesModal(false)}
                              >
                                Cancel
                              </button>
                              <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={function submitNotes() {
                                  Axios.post("/api/UserNotes/addNotes", {
                                    Book_Name: card.Book_Name,
                                    Author: card.Book_Author,
                                    Notes: notes,
                                    Book_id: card.id,

                                    User_Id: userid,
                                  }).then((data) => {
                                    setCompData(data.data);
                                  });
                                  setShowNotesModal(false);
                                }}
                              >
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                  ) : null}
                </div>
                {showMod ? (
                  <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                      <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none">
                          {/*header*/}

                          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 pt-9">
                            <div className=" rounded-md flex items-center justify-end"></div>
                            <div className="p-4  rounded-md flex items-center justify-end cursor-pointer">
                              <div
                                className="pr-5"
                                onClick={() => setShowMod(false)}
                              >
                                <Image src={dclose} />
                              </div>
                            </div>
                          </div>

                          {/*body*/}
                          <div className="relative p-6 flex-auto">
                            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 ">
                              <div className=" rounded-md flex items-center justify-center">
                                <div
                                  className="cursor-pointer"
                                  onClick={function handleDark() {
                                    setDark(false);
                                  }}
                                >
                                  <Image src={dark1} />
                                </div>
                                <div
                                  className="pl-9 cursor-pointer"
                                  onClick={function handleDark() {
                                    setDark(true);
                                  }}
                                >
                                  <Image src={light} />
                                </div>
                              </div>
                              <div className="w-full rounded-md flex items-center justify-center">
                                <div
                                  className="text-white text-base cursor-pointer"
                                  onClick={function handleSFont() {
                                    rangeval > 1
                                      ? setRangeval(rangeval - 0.1)
                                      : 1;
                                  }}
                                >
                                  Aa
                                </div>
                                <div className="pl-3 pr-2">
                                  <input
                                    className="rounded-lg overflow-hidden appearance-none bg-gray-400 h-3 w-[200px] sm:w-[300px] md:w-[300px] lg:w-[300px]"
                                    type="range"
                                    min="1"
                                    max="1.4"
                                    value={rangeval}
                                    step="0.1"
                                    onChange={(event) =>
                                      setRangeval(event.target.value)
                                    }
                                  />

                                  {console.log(rangeval)}
                                </div>
                                <div
                                  className="text-white text-2xl cursor-pointer "
                                  onClick={function handleSFont() {
                                    rangeval < 1.4
                                      ? setRangeval(rangeval + 0.1)
                                      : 1.4;
                                  }}
                                >
                                  Aa
                                </div>
                              </div>
                            </div>
                          </div>
                          {/*footer*/}
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}
                {showModal ? (
                  <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none top-20">
                      <div className="relative w-auto my-6 mx-auto max-w-3xl h-[100%]">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none">
                          {/*header*/}

                          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 pt-9">
                            <div className=" rounded-md flex items-center justify-end">
                              <span className="text-2xl text-white font-bold">
                                Contents{" "}
                              </span>
                            </div>
                            <div className="p-4  rounded-md flex items-center justify-end cursor-pointer">
                              <div
                                className="pr-5"
                                onClick={() => setShowModal(false)}
                              >
                                <Image src={dclose} />
                              </div>
                            </div>
                          </div>

                          {/*body*/}
                          <div className="relative p-6 flex-auto">
                            <div
                              className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5 pb-9 p-4"
                              id="read"
                            >
                              {conten.Ideos.map((idea, n) => (
                                <div
                                  className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2 cursor-pointer bg-black "
                                  onClick={function handleTick() {
                                    router.push(
                                      `/summary/${idea.Ideo_id}?user=${userid}&ideo=${idea.Ideo_id}`
                                    );
                                  }}
                                  key={n}
                                >
                                  <div className="p-2rounded-md flex items-center justify-center ">
                                    <h1 className="text-sm lg:text-xl text-white ">
                                      {idea.Ideo_num}
                                    </h1>
                                  </div>
                                  <div className="p-2rounded-md flex items-center justify-start ">
                                    <span className="text-sm lg:text-xl text-white">
                                      {idea.name}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          {/*footer*/}
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
            </StyleRoot>
          )}
        </div>
      ) : (
        <div>
          <Loader />
        </div>
      )}
    </>
  );
};
export default Read;
