import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Loader from "../../components/loader";
import Axios from "axios";
import acess from "../../public/access.jpg"
import Navbar from "../../components/navbar";
import { getCookie } from "cookies-next";
import BNavbar from "../../components/bgnavbar";
import DarkAudio from "../../components/DarkAudio";
import close from "../../public/close.svg";
import dclose from "../../public/darkclose.svg";
import darkfor from "../../public/darkfor.svg";
import darkc from "../../public/darkconc.svg";
import forward from "../../public/forward.svg";
import content from "../../public/content.svg";
import read from "../../public/read_add.svg";
import read_white from "../../public/read_white.svg";
import light from "../../public/light.svg";
import Audio from "../../components/Audio";
import whad from "../../public/whitead.svg";
import blad from "../../public/blackad.svg";


const Listen = () => {
  const router = useRouter();
  const [data, setData] = useState(false);
  const [conten, setContent] = useState(false);
  const [dark, setDark] = useState(true);
  const [showModal, setshowModal] = useState(false);
  const { user, book } = router.query;

  // const array = favo.listen ?favo.listen.split(":"):null
  // console.log(array[0]);
  // console.log(array[1]);
  // const num = array[1];

  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios.post("/api/PreAudio/listPreAudio", {
        id: book[1],
      });

      setData(result.data);
    };

    fetchData();
    //console.log(data);
  }, []);
  useEffect(() => {
    const fetchPre = async () => {
      const result = await Axios.post("/api/audioCont/listAudio", {
        Ideo_id: book,
      });

      setContent(result.data);
    };

    fetchPre();
    //
  }, []);

  return (
    <div>
      {data && conten && getCookie('user') ? (
        <div>
          {dark ? (
            <div className="h-[100%]">
              <Navbar />
              {console.log(data)}
              {console.log(conten)}
              <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 pb-1 px-[1.7rem]">
                <div
                  className=" rounded-md flex items-center justify-start cursor-pointer"
                  onClick={function handleForward() {
                    router.push(
                      `/desc/${book[0]}?user=${user}&book=${book[0]}`
                    );
                  }}
                >
                  <div className="ideoIcons">
                    <Image src={forward} width={30} height={30} />
                  </div>
                </div>
                <div className=" rounded-md flex items-center justify-center">
                  <div>
                    <div className="font-semibold text-green-500 ideoHead xl:text-4xl lg:text-3xl md:text-2xl text-[20px]">
                      {conten[0].Ideo_num}
                    </div>
                  </div>
                </div>
                <div className="rounded-md flex items-center justify-end">
                  <div>
                    <div
                      className="flex justify-center items-center p-2 RightIcons cursor-pointer"
                      onClick={function handleModal() {
                        setshowModal(true);
                      }}
                    >
                      <Image src={content} />
                    </div>
                    <div
                      className="flex justify-center items-center p-2  RightIcons cursor-pointer"
                      onClick={function handleRead() {
                        router.push(`/summary/11?user=${user}&ideo=11`);
                      }}
                    >
                      <Image src={read} />
                    </div>
                    <div
                      className="flex justify-center items-center p-2 RightIcons cursor-pointer"
                      onClick={function handleDark() {
                        setDark(false);
                      }}
                    >
                      <Image src={whad}/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center font-medium xl:text-4xl lg:text-3xl md:text-2xl text-[18px] text-center sm:px-6 sm:pb-10 px-4 pb-4">
                {conten[0].Ideo_title}
              </div>
              <div className="flex-column justify-center items-center pt-20 sm:pt-0 md:pt-0 lg:pt-0 xl:pt-0">
                <div className="pb-4 pt-4 flex justify-center items-center">
                  <Image src={conten[0].Ideo_image} width={1500} height={500} />
                </div>

                <div className="flex justify-center  items-center">
                  <Audio song={conten[0].audio} />
                </div>
              </div>

              {showModal ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none top-10">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl h-full">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}

                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 pt-9">
                          <div className=" rounded-md flex items-center justify-end">
                            <span className="text-2xl ">Audios </span>
                          </div>
                          <div className="p-4  rounded-md flex items-center justify-end cursor-pointer">
                            <div
                              className="pr-5"
                              onClick={() => setshowModal(false)}
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
                            {data[0].Ideos.map((idea, n) => (
                              <div
                                className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2 cursor-pointer bg-white "
                                onClick={function handleTick() {
                                  router.push(
                                    `/audio/${idea.Ideo_id}?user=${user}&book=${idea.Ideo_id}`
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
              <br />
            </div>
          ) : (
            <div className="bg-black h-[100%]">
              <BNavbar />
              <div>
                {console.log(data)}
                {console.log(conten)}
                <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 pb-1 px-[1.7rem]">
                  <div
                    className=" rounded-md flex items-center justify-start cursor-pointer"
                    onClick={function handleForward() {
                      router.push(
                        `/desc/${book[0]}?user=${user}&book=${book[0]}`
                      );
                    }}
                  >
                    <div className="ideoIcons">
                      <Image src={darkfor} width={30} height={30} />
                    </div>
                  </div>
                  <div className=" rounded-md flex items-center justify-center">
                    <div>
                      <div className=" text-white font-semibold ideoHead xl:text-4xl lg:text-3xl md:text-2xl text-[20px]">
                        {conten[0].Ideo_num}
                      </div>
                    </div>
                  </div>
                  <div className="rounded-md flex items-center justify-end">
                    <div>
                      <div
                        className="flex justify-center items-center p-2 RightIcons cursor-pointer"
                        onClick={function handleModal() {
                          setshowModal(true);
                        }}
                      >
                        <Image src={darkc} />
                      </div>
                      <div
                        className="flex justify-center items-center p-2  RightIcons cursor-pointer"
                        onClick={function handleRead() {
                          router.push(`/summary/11?user=${user}&book=11`);
                        }}
                      >
                        <Image src={read_white} />
                      </div>
                      <div
                        className="flex justify-center items-center p-2 RightIcons cursor-pointer"
                        onClick={function handleDark() {
                          setDark(true);
                        }}
                      >
                        <Image src={blad} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-white flex justify-center items-center font-medium xl:text-4xl lg:text-3xl md:text-2xl text-[18px] text-center sm:px-6 sm:pb-10 px-4 pb-4">
                  {conten[0].Ideo_title}
                </div>
                <div className="flex-column justify-center items-center pt-20 sm:pt-0 md:pt-0 lg:pt-0 xl:pt-0">
                <div className="pb-4 pt-4 flex justify-center items-center">
                  <Image src={conten[0].Ideo_image} width={1500} height={500} />
                </div>
                </div>
                {/* <div className="flex justify-center items-center pt-2">
            <Image src={conten[0].Ideo_image} width={300} height={300} />
          </div> */}
                <div className="flex justify-center items-center pt-2">
                  <DarkAudio song={conten[0].audio} />
                </div>
                {showModal ? (
                  <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none top-10">
                      <div className="relative w-auto my-6 mx-auto max-w-3xl h-full">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none">
                          {/*header*/}

                          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 pt-9">
                            <div className=" rounded-md flex items-center justify-end">
                              <span className="text-2xl text-white">
                                Audios{" "}
                              </span>
                            </div>
                            <div className="p-4  rounded-md flex items-center justify-end cursor-pointer">
                              <div
                                className="pr-5"
                                onClick={() => setshowModal(false)}
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
                              {data[0].Ideos.map((idea, n) => (
                                <div
                                  className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2 cursor-pointer bg-black "
                                  onClick={function handleTick() {
                                    router.push(
                                      `/audio/${idea.Ideo_id}?user=${user}&book=${idea.Ideo_id}`
                                    );
                                  }}
                                  key={n}
                                >
                                  <div className="p-2rounded-md flex items-center justify-center ">
                                    <h1 className="text-sm lg:text-xl  text-white">
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
            </div>
          )}
        </div>
      ) : (
        console.log("wait")
      )}
    </div>
  );
};

export default Listen;
