import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Loader from "../../../components/loader";
import Axios from "axios";
import bullet from "../../../public/bullet.svg";
import Image from "next/image";
import font from "../../../public/font.svg";
import sound from "../../../public/sound.svg";
import close from "../../../public/close.svg";
import dclose from "../../../public/darkclose.svg";
import ProgressBar from "../../../components/progress";
import forward from "../../../public/forward.svg";
import backward from "../../../public/backward.svg";
import darkad from "../../../public/darkaudio.svg";
import darkb from "../../../public/darkback.svg";
import darkc from "../../../public/darkconc.svg";
import dark1 from "../../../public/dark.svg";
import light from "../../../public/light.svg";
import darkfor from "../../../public/darkfor.svg";
import darkfont from "../../../public/darkfont.svg";
import forwhole from "../../../public/forwardwh.svg";
import content from "../../../public/content.svg";
import startq from "../../../public/startq.svg";
import endq from "../../../public/endq.svg";
import Modal from "../../../components/notesModal";
const Read = () => {
  const [data, setData] = useState(false);
  const [conten, setContent] = useState(false);
  const [card, setCard] = useState(false);
  const [dark, setDark] = useState(true);
  const [notes, setNotes] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [rangeval, setRangeval] = useState(1);
  const [comp, setComp] = useState(1);
  const [showNotesModal, setShowNotesModal] = React.useState(false);
  const [compdata, setCompData] = useState(false);
  const [showMod, setShowMod] = useState(false);
  const router = useRouter();
  const favo = router.query;

  const array = favo.ideo.split(":");
  console.log(array[0]);
  console.log(array[1]);
  var str = array[1];
  var num = Number(array[1]);

  const userid = array[0];

  var num2 = Number(str[0]);
  var num3 = Number(str[1]);
  const d = new Date();
  const date = new Date();

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
      const result = await Axios.post(
        "http://localhost:3000/api/bookSummary/findSummary",
        {
          Ideo_id: num,
        }
      );

      setData(result.data);
    };

    fetchData();
    console.log(data);
  }, []);
  useEffect(() => {
    const fetchPre = async () => {
      const result = await Axios.post(
        "http://localhost:3000/api/prebook/findPrebook",
        {
          id: num2,
        }
      );

      setContent(result.data);
    };

    fetchPre();
    console.log(conten);
  }, []);
  useEffect(() => {
    const fetchCard = async () => {
      const result = await Axios.post(
        "http://localhost:3000/api/bookCard/findBookcard",
        {
          id: num2,
        }
      );

      setCard(result.data);
    };

    fetchCard();
    console.log(card);
  }, []);
  // useEffect(() => {
  //   const fetchComp = async () => {
  //     const result = await Axios.post(
  //       "http://localhost:3000/api/UserCompleted/addCompleted",
  //       {
  //         name: card.Book_Name,
  //         image: card.Cover_image,
  //         author: card.Book_Author,
  //         percent: Math.round((data.Ideo_num / data.Total) * 100),
  //         id: card.id,

  //         User_Id: "1212",
  //       }
  //     );

  //     setCompData(result.data);
  //   };

  //   fetchComp();
  //   console.log(compdata);
  // }, []);
  // useEffect(() => {
  //   Axios.post("http://localhost:3000/api/prebook/findPrebook", {
  //     id: 1,
  //   }).then((data) => {
  //     setContent(data.data);
  //   });
  //   console.log(conten);
  // }, []);
  // useEffect(() => {
  //   Axios.post("http://localhost:3000/api/bookCard/findBookcard", {
  //     id: 1,
  //   }).then((data) => {
  //     setCard(data.data);
  //   });
  //   console.log(card);
  // }, []);

  // useEffect(() => {
  //   // Prefetch the dashboard page
  //   router.prefetch(
  //     `http://localhost:3000/read/summary/${String(num2)}${String(num3 + 1)}`
  //   );
  // }, []);
  // useEffect(() => {
  //   Axios.post("http://localhost:3000/api/UserCompleted/addCompleted", {
  //     name: card.Book_Name,
  //     image: card.Cover_image,
  //     author: card.Book_Author,
  //     percent: Math.round((data.Ideo_num / data.Total) * 100),
  //     id: card.id,

  //     User_Id: "1212",
  //   }).then((data) => {
  //     setCompData(data.data);
  //   });
  //   console.log(compdata);
  // }, []);
  // {if (Math.round((data.Ideo_num / data.Total) * 100) === 100) {

  // }}

  return (
    <>
      {data ? (
        <div>
          {dark ? (
            <div className="p-4 pb-9">
              <ProgressBar />
              {console.log(data)}
              {console.log(card)}
              {console.log(conten)}
              <div class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 pb-1 px-[1.7rem]">
                <div
                  class=" rounded-md flex items-center justify-start cursor-pointer"
                  onClick={function handleDesc() {
                    router.push(`/read/desc/${userid}:${num2}`);
                  }}
                >
                  <div className="ideoIcons">
                    <Image src={forward} width={30} height={30} />
                  </div>
                </div>
                <div class=" rounded-md flex items-center justify-center">
                  <div>
                    <div
                      className=" text-black text-bold ideoHead"
                      style={{ fontSize: `${rangeval * 34}px` }}
                    >
                      {data.Ideo_title}
                    </div>
                  </div>
                </div>
                <div class="rounded-md flex items-center justify-end">
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
                    <div className="p-2 RightIcons cursor-pointer">
                      <Image src={sound} />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="flex justify-center items-center  text-green-700 text-bold pl-4 pb-4 ideoData"
                style={{ fontSize: `${rangeval * 38}px` }}
              >
                {data.Ideo}
              </div>
              <div className="pb-4 ">
                <Image src={data.Ideo_image} width={1500} height={700} />
              </div>
              <div>
                <div className="bg-white drop-shadow rounded-lg -mb-9 mb-[1.5rem]">
                  <div class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2 p-4 ">
                    <div
                      class=" rounded-md flex items-center justify-start ideoIcons cursor-pointer"
                      onClick={function handleForward() {
                        router.push(
                          `/read/summary/${userid}:${num2}${num3 - 1}`
                        );
                      }}
                    >
                      <Image src={forward} />
                    </div>
                    <div class="rounded-md flex items-center justify-center progBar">
                      <div class="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                        <div
                          class="bg-green-600 h-1.5 rounded-full dark:bg-green-500 "
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
                      class="rounded-md flex  justify-end cursor-pointer"
                      onClick={function handleBackward() {
                        Axios.post(
                          "http://localhost:3000/api/UserCompleted/addCompleted",
                          {
                            name: card.Book_Name,
                            image: card.Cover_image,
                            author: card.Book_Author,
                            percent:
                              Math.round((data.Ideo_num / data.Total) * 100) >=
                              80
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
                        Axios.post(
                          "http://localhost:3000/api/UserDashboard/updateDash",
                          {
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
                          }
                        ).then((val) => {
                          console.log(val);
                        });

                        router.replace(
                          `http://localhost:3000/read/summary/${userid}:${String(
                            num2
                          )}${String(num3 + 1)}`
                        );
                      }}
                    >
                      <Image src={backward} />
                    </div>
                  </div>
                </div>
              </div>
              {data.Book_Summary[0].Ideo_Quest.map((dat, n) => (
                <div>
                  {dat.length > 2 ? (
                    <div
                      className="flex justify-center items-center  bg-neutral-300  text-bold p-4 bg-white greyContent"
                      style={{
                        textAlign: "center",
                        fontSize: `${rangeval * 38}px`,
                      }}
                    >
                      {dat}
                    </div>
                  ) : (
                    console.log("")
                  )}
                  <div className="px-1">
                    <div className="p-4">
                      {data.Book_Summary[0].Content[n].map((val) => (
                        <div
                          className=" text-black  p-4 flex justify-center items-center"
                          style={{
                            lineHeight: "1.7",
                            fontSize: `${rangeval * 28}px`,
                          }}
                        >
                          {val}
                        </div>
                      ))}
                      {data.Book_Summary[0].images[n][0].length > 2 ? (
                        <div className="flex justify-center items-center p-4">
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
                        <div className="flex justify-center items-center">
                          <div className="mx-[auto]">
                            <div className="text-left leftQuote">
                              <Image src={startq} />
                            </div>
                            <div
                              className=" text-green-700 mx-[2rem]"
                              style={{ fontSize: `${rangeval * 28}px` }}
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
                  <>
                    <button
                      className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowNotesModal(true)}
                    >
                      Notes
                    </button>
                    {showNotesModal ? (
                      <>
                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                          <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                              {/*header*/}
                              <div className=" p-5 border-b bg-yellow-300 border-solid border-slate-200 rounded-t">
                                <div className="flex items-center justify-center text-xl font-bold ">
                                  IDEO II
                                </div>
                                <div className="flex items-center justify-center  text-base text-black">
                                  Technology & Innovation Lyft Employment{" "}
                                  <span className=" ml-5 text-sm text-green-800">
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
                                    Axios.post(
                                      "http://localhost:3000/api/UserNotes/addNotes",
                                      {
                                        Book_Name: card.Book_Name,
                                        Author: card.Book_Author,
                                        Notes: notes,
                                        Book_id: card.id,

                                        User_Id: userid,
                                      }
                                    ).then((data) => {
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
                  </>
                </div>
              ))}

              {data.Ideo_Peaks.length > 1 ? (
                <div>
                  <div
                    className=" text-black font-bold pl-4"
                    style={{ fontSize: `${rangeval * 38}px` }}
                  >
                    Ideo Peaks
                  </div>
                  <div className="bg-green-100 p-6">
                    <div className="p-4">
                      {data.Ideo_Peaks.map((val) => (
                        <div>
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
                              <div className="" style={{ fontSize: "28px" }}>
                                {val.name}
                              </div>
                              <div
                                className=" text-green-700"
                                style={{ fontSize: `${rangeval * 23}px` }}
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
              {showMod ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none top-10">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl h-[100vh]">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}

                        <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 pt-9">
                          <div class=" rounded-md flex items-center justify-end"></div>
                          <div class="p-4  rounded-md flex items-center justify-end cursor-pointer">
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
                          <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 ">
                            <div class=" rounded-md flex items-center justify-center">
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
                            <div class="p-4  rounded-md flex items-center justify-center">
                              <div className="text-black text-base">Aa</div>
                              <div className="pl-3 pr-2">
                                <input
                                  class="rounded-lg overflow-hidden appearance-none bg-gray-400 h-3 w-[300px]"
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
                              <div className="text-black text-2xl">Aa</div>
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

                        <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 pt-9">
                          <div class=" rounded-md flex items-center justify-end">
                            <span className="text-2xl ">Contents </span>
                          </div>
                          <div class="p-4  rounded-md flex items-center justify-end cursor-pointer">
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
                            class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5 pb-9 p-4"
                            id="read"
                          >
                            {conten.Ideos.map((idea, n) => (
                              <div
                                class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2 cursor-pointer bg-white "
                                onClick={function handleTick() {
                                  router.push(
                                    `/read/summary/${userid}:${idea.Ideo_id}`
                                  );
                                }}
                              >
                                <div class="p-2rounded-md flex items-center justify-center ">
                                  <h1 className="text-sm lg:text-xl  ">
                                    {idea.Ideo_num}
                                  </h1>
                                </div>
                                <div class="p-2rounded-md flex items-center justify-start ">
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
          ) : (
            <div className="p-4 pb-9 bg-black">
              <ProgressBar />
              {console.log(data)}
              <div class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 pb-1 px-[1.7rem]">
                <div
                  class=" rounded-md flex items-center justify-start cursor-pointer"
                  onClick={function handleDesc() {
                    router.push(`/read/desc/${userid}:${num2}`);
                  }}
                >
                  <div className="ideoIcons">
                    <Image src={forwhole} width={30} height={30} />
                  </div>
                </div>
                <div class=" rounded-md flex items-center justify-center">
                  <div>
                    <div
                      className=" text-white text-bold pb-4 ideoHead"
                      style={{ fontSize: `${rangeval * 34}px` }}
                    >
                      {data.Ideo_title}
                    </div>
                  </div>
                </div>
                <div class="rounded-md flex items-center justify-end">
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
                    <div className="p-2 RightIcons cursor-pointer">
                      <Image src={darkad} />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="flex justify-center items-center text-3xl text-green-500 text-bold pl-4 pb-4 ideoData"
                style={{ fontSize: `${rangeval * 38}px` }}
              >
                {data.Ideo}
              </div>
              <div className="pb-4">
                <Image src={data.Ideo_image} width={1500} height={700} />
              </div>
              <div>
                <div className="bg-black drop-shadow rounded-lg -mb-9 mb-[1.5rem]">
                  <div class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2 p-4 ">
                    <div
                      class=" rounded-md flex items-center justify-start ideoIcons cursor-pointer"
                      onClick={function handleForward() {
                        router.push(
                          `/read/summary/${userid}:${num2}${num3 - 1}`
                        );
                      }}
                    >
                      <Image src={darkfor} />
                    </div>
                    <div class="rounded-md flex items-center justify-center progBar">
                      <div class="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                        <div
                          class="bg-green-600 h-1.5 rounded-full dark:bg-green-500 "
                          style={{
                            width: `${(data.Ideo_num / data.Total) * 100}%`,
                          }}
                        ></div>
                      </div>
                      <div className="text-base text-white pl-4 pb-3 perc">
                        {Math.round((data.Ideo_num / data.Total) * 100) + "%"}
                      </div>
                    </div>
                    <div
                      class="rounded-md flex  justify-end cursor-pointer"
                      onClick={function handleBackward() {
                        Axios.post(
                          "http://localhost:3000/api/UserCompleted/addCompleted",
                          {
                            name: card.Book_Name,
                            image: card.Cover_image,
                            author: card.Book_Author,
                            percent:
                              Math.round((data.Ideo_num / data.Total) * 100) >=
                              80
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
                        Axios.post(
                          "http://localhost:3000/api/UserDashboard/updateDash",
                          {
                            Activity: [
                              4 * 8,
                              8 * 8,
                              12 * 8,
                              16 * 8,
                              7 * 1,
                              4 * 13,
                              10 * 6,
                            ],
                            User_Id: userid,
                          }
                        ).then((val) => {
                          console.log(val);
                        });
                        router.replace(
                          `http://localhost:3000/read/summary/${userid}:${String(
                            num2
                          )}${String(num3 + 1)}`
                        );
                      }}
                    >
                      <Image src={darkb} />
                    </div>
                  </div>
                </div>
              </div>
              {data.Book_Summary[0].Ideo_Quest.map((dat, n) => (
                <div>
                  {dat.length > 2 ? (
                    <div
                      className="flex justify-center items-center  bg-neutral-300  font-bold p-4 text-white bg-black greyContent"
                      style={{
                        textAlign: "center",
                        fontSize: `${rangeval * 38}px`,
                      }}
                    >
                      {dat}
                    </div>
                  ) : (
                    console.log("")
                  )}
                  <div className="px-1">
                    <div className="p-4">
                      {data.Book_Summary[0].Content[n].map((val) => (
                        <div
                          className=" text-white  p-4 flex justify-center items-center"
                          style={{
                            lineHeight: "1.5",
                            fontSize: `${rangeval * 28}px`,
                          }}
                        >
                          {val}
                        </div>
                      ))}
                      {data.Book_Summary[0].images[n][0].length > 2 ? (
                        <div className="flex justify-center items-center p-4">
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
                        <div className="flex justify-center items-center">
                          <div className="mx-[auto]">
                            <div className="text-left leftQuote">
                              <Image src={startq} />
                            </div>
                            <div
                              className=" text-green-500 mx-[2rem]"
                              style={{ fontSize: `${rangeval * 28}px` }}
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
                    className=" text-white font-bold pl-4"
                    style={{ fontSize: `${rangeval * 38}px` }}
                  >
                    Ideo Peaks
                  </div>
                  <div className="bg-black p-6">
                    <div className="p-4">
                      {data.Ideo_Peaks.map((val) => (
                        <div>
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
                                className=" text-white"
                                style={{ fontSize: `${rangeval * 28}px` }}
                              >
                                {val.name}
                              </div>
                              <div
                                className=" text-green-500"
                                style={{ fontSize: `${rangeval * 23}px` }}
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
              {showMod ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none top-10">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl h-[100vh]">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none">
                        {/*header*/}

                        <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 pt-9">
                          <div class=" rounded-md flex items-center justify-end"></div>
                          <div class="p-4  rounded-md flex items-center justify-end cursor-pointer">
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
                          <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 ">
                            <div class=" rounded-md flex items-center justify-center">
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
                            <div class="p-4  rounded-md flex items-center justify-center">
                              <div className="text-white text-base">Aa</div>
                              <div className="pl-3 pr-2">
                                <input
                                  class="rounded-lg overflow-hidden appearance-none bg-gray-400 h-3 w-[300px]"
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
                              <div className="text-white text-2xl">Aa</div>
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
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none">
                        {/*header*/}

                        <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 pt-9">
                          <div class=" rounded-md flex items-center justify-end">
                            <span className="text-2xl text-white font-bold">
                              Contents{" "}
                            </span>
                          </div>
                          <div class="p-4  rounded-md flex items-center justify-end cursor-pointer">
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
                            class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5 pb-9 p-4"
                            id="read"
                          >
                            {conten.Ideos.map((idea, n) => (
                              <div
                                class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2 cursor-pointer bg-black "
                                onClick={function handleTick() {
                                  router.push(
                                    `/read/summary/${userid}:${idea.Ideo_id}`
                                  );
                                }}
                              >
                                <div class="p-2rounded-md flex items-center justify-center ">
                                  <h1 className="text-sm lg:text-xl text-white ">
                                    {idea.Ideo_num}
                                  </h1>
                                </div>
                                <div class="p-2rounded-md flex items-center justify-start ">
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
