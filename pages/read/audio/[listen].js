import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Loader from "../../../components/loader";
import Axios from "axios";
import DarkAudio from "../../../components/DarkAudio";
import close from "../../../public/close.svg";
import dclose from "../../../public/darkclose.svg";
import darkfor from "../../../public/darkfor.svg";
import darkc from "../../../public/darkconc.svg";
import forward from "../../../public/forward.svg";
import content from "../../../public/content.svg";
import read from "../../../public/read_add.svg";
import read_white from "../../../public/read_white.svg";
import light from "../../../public/light.svg";
import Audio from "../../../components/Audio";

const Listen = () => {
  const router = useRouter();
  const [data, setData] = useState(false);
  const [conten, setContent] = useState(false);
  const [dark, setDark] = useState(true);
  const [showModal, setshowModal] = useState(false);
  const favo = router.query;

  const array = favo.listen.split(":");
  console.log(array[0]);
  console.log(array[1]);
  const num = array[1];

  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios.post(
        "http://localhost:3000/api/PreAudio/listPreAudio",
        {
          id: num[0],
        }
      );

      setData(result.data);
    };

    fetchData();
    //console.log(data);
  }, []);
  useEffect(() => {
    const fetchPre = async () => {
      const result = await Axios.post(
        "http://localhost:3000/api/audioCont/listAudio",
        {
          Ideo_id: num,
        }
      );

      setContent(result.data);
    };

    fetchPre();
    //
  }, []);

  return (
    <div>
      {data && conten ? (
        <div>
          {dark ? (
            <div>
              {console.log(data)}
              {console.log(conten)}
              <div class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 pb-1 px-[1.7rem]">
                <div
                  class=" rounded-md flex items-center justify-start cursor-pointer"
                  onClick={function handleForward() {
                    router.push(`/read/desc/${array[0]}:${num[0]}`);
                  }}
                >
                  <div className="ideoIcons">
                    <Image src={forward} width={30} height={30} />
                  </div>
                </div>
                <div class=" rounded-md flex items-center justify-center">
                  <div>
                    <div className=" text-black text-bold ideoHead">
                      {conten[0].Ideo_num}
                    </div>
                  </div>
                </div>
                <div class="rounded-md flex items-center justify-end">
                  <div>
                    <div
                      className="p-2 RightIcons cursor-pointer"
                      onClick={function handleModal() {
                        setshowModal(true);
                      }}
                    >
                      <Image src={content} />
                    </div>
                    <div
                      className="p-2   RightIcons cursor-pointer"
                      onClick={function handleRead() {
                        router.push(`/read/summary/${array[0]}:11`);
                      }}
                    >
                      <Image src={read} />
                    </div>
                    <div
                      className=" RightIcons cursor-pointer"
                      onClick={function handleDark() {
                        setDark(false);
                      }}
                    >
                      <Image src={light} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center">
                {conten[0].Ideo_title}
              </div>
              <div className="pb-4 pt-4">
                <Image src={conten[0].Ideo_image} width={1500} height={500} />
              </div>
              {/* <div className="flex justify-center items-center pt-2">
              <Image src={conten[0].Ideo_image} width={300} height={300} />
            </div> */}
              <div className="flex justify-center items-center pt-2">
                <Audio song={conten[0].audio} />
              </div>

              {showModal ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none top-10">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl h-[100vh]">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}

                        <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 pt-9">
                          <div class=" rounded-md flex items-center justify-end">
                            <span className="text-2xl ">Audios </span>
                          </div>
                          <div class="p-4  rounded-md flex items-center justify-end cursor-pointer">
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
                            class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5 pb-9 p-4"
                            id="read"
                          >
                            {data[0].Ideos.map((idea, n) => (
                              <div
                                class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2 cursor-pointer bg-white "
                                onClick={function handleTick() {
                                  router.push(
                                    `/read/audio/${array[0]}:${idea.Ideo_id}`
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
              <br />
            </div>
          ) : (
            <div className="bg-black">
              <div>
                {console.log(data)}
                {console.log(conten)}
                <div class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 pb-1 px-[1.7rem]">
                  <div
                    class=" rounded-md flex items-center justify-start cursor-pointer"
                    onClick={function handleForward() {
                      router.push(`/read/desc/${array[0]}:${num[0]}`);
                    }}
                  >
                    <div className="ideoIcons">
                      <Image src={darkfor} width={30} height={30} />
                    </div>
                  </div>
                  <div class=" rounded-md flex items-center justify-center">
                    <div>
                      <div className=" text-white text-bold ideoHead">
                        {conten[0].Ideo_num}
                      </div>
                    </div>
                  </div>
                  <div class="rounded-md flex items-center justify-end">
                    <div>
                      <div
                        className="p-2 RightIcons cursor-pointer"
                        onClick={function handleModal() {
                          setshowModal(true);
                        }}
                      >
                        <Image src={darkc} />
                      </div>
                      <div
                        className="p-2   RightIcons cursor-pointer"
                        onClick={function handleRead() {
                          router.push(`/read/summary/${array[0]}:11`);
                        }}
                      >
                        <Image src={read_white} />
                      </div>
                      <div
                        className=" RightIcons cursor-pointer"
                        onClick={function handleDark() {
                          setDark(true);
                        }}
                      >
                        <Image src={light} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center items-center text-white">
                  {conten[0].Ideo_title}
                </div>
                <div className="pb-4 pt-4">
                  <Image src={conten[0].Ideo_image} width={1500} height={500} />
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
                      <div className="relative w-auto my-6 mx-auto max-w-3xl h-[100vh]">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none">
                          {/*header*/}

                          <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 pt-9">
                            <div class=" rounded-md flex items-center justify-end">
                              <span className="text-2xl text-white">
                                Audios{" "}
                              </span>
                            </div>
                            <div class="p-4  rounded-md flex items-center justify-end cursor-pointer">
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
                              class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5 pb-9 p-4"
                              id="read"
                            >
                              {data[0].Ideos.map((idea, n) => (
                                <div
                                  class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2 cursor-pointer bg-black "
                                  onClick={function handleTick() {
                                    router.push(
                                      `/read/audio/${array[0]}:${idea.Ideo_id}`
                                    );
                                  }}
                                >
                                  <div class="p-2rounded-md flex items-center justify-center ">
                                    <h1 className="text-sm lg:text-xl  text-white">
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
            </div>
          )}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Listen;
