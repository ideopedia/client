import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Loader from "../components/loader";
import Axios from "axios";
import bullet from "../public/bullet.svg";
import Image from "next/image";
import font from "../public/font.svg";
import sound from "../public/sound.svg";
import ProgressBar from "../components/progress";
import forward from "../public/forward.svg";
import backward from "../public/backward.svg";
import ideo2 from "../public/ideo2.svg";
import ideo2in from "../public/ideo2in.svg";
import content from "../public/content.svg";
import startq from "../public/startq.svg";
import endq from "../public/endq.svg";
const Read = () => {
  const [data, setData] = useState(false);
  const router = useRouter();
  const { ideo } = router.query;
  // var num = Number(ideo);
  // var num2 = Number(ideo[0]);
  // var num3 = Number(ideo[1]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios.post(
        "/api/bookSummary/findSummary",
        {
          Ideo_id: 11,
        }
      );

      setData(result.data);
    };

    fetchData();
    console.log(data);
  }, []);

  return (
    <>
      {data ? (
        <div className="p-4 pb-9">
          <ProgressBar />
          {console.log(data)}
          <div class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 pb-1 px-[1.7rem]">
            <div class=" rounded-md flex items-center justify-start">
              <div className="ideoIcons">
                <Image src={forward} width={30} height={30} />
              </div>
            </div>
            <div class=" rounded-md flex items-center justify-center">
              <div>
                <div className="text-3xl text-black text-bold ideoHead">
                  IDEO II
                </div>
              </div>
            </div>
            <div class="rounded-md flex items-center justify-end">
              <div>
                <div className="p-2 RightIcons">
                  <Image src={content} />
                </div>
                <div className="p-2   RightIcons">
                  <Image src={font} />
                </div>
                <div className="p-2 RightIcons">
                  <Image src={sound} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center text-3xl text-green-700 text-bold pl-4 ideoData">
            {data.Ideo}
          </div>
          <div className="pb-4">
            <Image src={ideo2} />
          </div>
          <div>
            <div className="bg-white drop-shadow rounded-lg -mb-9 mb-[1.5rem]">
              <div class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2 p-4 ">
                <div
                  class=" rounded-md flex items-center justify-start ideoIcons"
                  onClick={function handleForward() {
                    router.push(`/read/summary/${num2}${num3 - 1}`);
                  }}
                >
                  <Image src={forward} />
                </div>
                <div class="rounded-md flex items-center justify-center progBar">
                  <div class="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                    <div
                      class="bg-green-600 h-1.5 rounded-full dark:bg-green-500 "
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                  <div className="text-base pl-4 pb-3 perc">45%</div>
                </div>
                <div
                  class="rounded-md flex  justify-end "
                  onClick={function handleBackward() {
                    router.push(
                      `/read/summary/${String(num2)}${String(num3 + 1)}`
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
                  className="flex justify-center items-center text-2xl bg-neutral-300  text-bold p-4 bg-white greyContent"
                  style={{ textAlign: "center" }}
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
                      className="text-xl text-black  p-4 flex justify-center items-center"
                      style={{ lineHeight: "1.5" }}
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
                        <div className="lg:text-2xl text-base text-green-700 mx-[2rem]">
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
            <div className="bg-green-100 p-6">
              <div className="p-4">
                {data.Ideo_Peaks.map((val) => (
                  <div>
                    <div style={{ position: "absolute", marginTop: "0.7rem" }}>
                      <Image src={bullet} width={40} height={40} />
                    </div>
                    <div className=" p-4 ml-8">
                      <div className="pr-4">
                        <div className="text-xl">{val.name}</div>
                        <div className="text-base text-green-700">
                          {val.quote}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            console.log("")
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
