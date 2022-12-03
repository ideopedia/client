import Head from "next/head";
import InfluencerSlider from "../components/influencer";
import card1 from "../public/Card_1.svg";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import audio from "../public/hsec2.svg";
import summarry from "../public/hsec1.svg";
import download from "../public/download.svg";
import TextSelector from "text-selection-react";
import test from "../public/test.svg";
import Link from "next/link";
import infSquare from "../public/Hoveritem.svg";
import { getCookies, getCookie, setCookies, removeCookies } from "cookies-next";
import rightarr from "../public/rightarr.svg";
import homeimage from "../public/homeimage.svg";
import fe1 from "../public/f1.svg";
import fe2 from "../public/f2.svg";
import fe3 from "../public/f3.svg";
import influencer1 from "../public/influencer1.svg";
import influencer2 from "../public/influencer2.svg";
import influencer3 from "../public/influencer3.svg";
import influencer4 from "../public/influencer4.png";
import influencer5 from "../public/influencer5.svg";
import influencer6 from "../public/influencer6.png";
import influencer7 from "../public/influencer7.svg";
import influencer8 from "../public/influencer8.png";
import hover1 from "../public/hover1.svg";
import hover2 from "../public/hover2.svg";
import hover3 from "../public/hover3.svg";
import hover4 from "../public/hover4.svg";
import hover5 from "../public/hover5.svg";
import hover6 from "../public/hover6.svg";
import hover7 from "../public/hover7.svg";
import hover8 from "../public/hover8.svg";

import Features from "../components/Features";
import sampInf from "../public/infTest.svg";
import Hero from "../components/hero";
import testflu from "../public/testflu.svg";
import testfl from "../public/testfl.svg";
import InfluencerSliderleft from "../components/infuslide";
import InfluencerSliderright from "../components/infuslideright";
import { useState, useCallback, useEffect, useReducer } from "react";

export default function Home() {
  const infReducer = (state, action) => {
    switch (action.type) {
      case "inf1":
        return { inf1: true };
      case "inf2":
        return { inf2: true };
      case "inf3":
        return { inf3: true };
      case "inf4":
        return { inf4: true };
      case "inf5":
        return { inf5: true };
      case "inf6":
        return { inf6: true };
      case "inf7":
        return { inf7: true };
      case "inf8":
        return { inf8: true };
      default:
        return {};
    }
  };
  const [data, setData] = useState("");
  const [infState, dispatchInf] = useReducer(infReducer, {});
  // setCookies("test", "value", { maxAge: 60 * 6 * 24 });
  function handleMouseUp() {
    setData(window.getSelection().toString());
    return <div className="fixed z-20 top-30  text-red-900 ">hello</div>;
  }

  return (
    <div>
      <Head>
        <title>Ideopedia</title>
        <meta name="description" content="ideopedia" />
        <link rel="icon" href="/tablogo.svg" />
      </Head>
      <Navbar isLogedIn={false} />
      <Hero />
      <div className="wavebgr">
        {/* {console.log(data)} */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 lg:gap-6 md:gap-5 gap-4 pb-20">
          <div className="rounded-md flex items-center justify-center">
            <span className="lg:text-3xl md:text-[26px] text-[18px]">
              An Invitation-only platform
            </span>
          </div>
          <div className="rounded-md flex items-center justify-center ">
            <span className="lg:text-4xl md:text-[28px] text-[18px] text-black font-semibold text-center cuteg">
              THAT SHARES CUTTING-EDGE IDEAS WITH
            </span>
          </div>
          <div className="rounded-md flex items-center justify-center greenBtn">
            <div className=" bg-green-500 flex justify-center items-center high">
              <span className=" text-white font-semibold lg:text-[40px] md:text-[30px] text-xl text-center">
                THE TOP 5000 INFLUENCERS IN INDIA
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-4">
          <div className=" flex justify-center infPic">
            <Image
              onMouseEnter={() => dispatchInf({ type: "inf1" })}
              onMouseLeave={() => dispatchInf({ type: "noth" })}
              src={!infState.inf1 ? influencer1 : hover1}
              width={250}
              height={250}
            />
          </div>

          <div className="p-4  rounded-md flex items-center justify-center infPic">
            <Image
              onMouseEnter={() => dispatchInf({ type: "inf2" })}
              onMouseLeave={() => dispatchInf({ type: "noth" })}
              src={!infState.inf2 ? influencer2 : hover2}
              width={250}
              height={250}
            />
          </div>
          <div className="p-4  rounded-md flex items-center justify-center infPic">
            <Image
              onMouseEnter={() => dispatchInf({ type: "inf3" })}
              onMouseLeave={() => dispatchInf({ type: "noth" })}
              src={!infState.inf3 ? influencer3 : hover3}
              width={250}
              height={250}
            />
          </div>
          <div className="p-4  rounded-md flex items-center justify-center infPic">
            <Image
              onMouseEnter={() => dispatchInf({ type: "inf4" })}
              onMouseLeave={() => dispatchInf({ type: "noth" })}
              src={!infState.inf4 ? influencer4 : hover4}
              width={250}
              height={250}
            />
          </div>
          <div className="p-4  rounded-md flex items-center justify-center infPic">
            <Image
              onMouseEnter={() => dispatchInf({ type: "inf5" })}
              onMouseLeave={() => dispatchInf({ type: "noth" })}
              src={!infState.inf5 ? influencer5 : hover5}
              width={250}
              height={250}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-4">
          <div className="p-4  rounded-md flex items-center justify-center"></div>
          <div className=" rounded-md flex items-center justify-center infPic ">
            <Image
              onMouseEnter={() => dispatchInf({ type: "inf6" })}
              onMouseLeave={() => dispatchInf({ type: "noth" })}
              src={!infState.inf6 ? influencer6 : hover6}
              width={250}
              height={250}
            />
          </div>
          <div className="p-4  rounded-md flex items-center justify-center infPic">
            <Image
              onMouseEnter={() => dispatchInf({ type: "inf7" })}
              onMouseLeave={() => dispatchInf({ type: "noth" })}
              src={!infState.inf7 ? influencer7 : hover7}
              width={250}
              height={250}
            />
          </div>
          <div className="p-4  rounded-md flex items-center justify-center infPic">
            <Image
              onMouseEnter={() => dispatchInf({ type: "inf8" })}
              onMouseLeave={() => dispatchInf({ type: "noth" })}
              src={!infState.inf8 ? influencer8 : hover8}
              width={250}
              height={250}
            />
          </div>
          <div className="p-4  rounded-md flex items-center justify-center"></div>
        </div>
        {/* <div className="infPics pt-9 text-center">
          <div className="p-4 rounded-md">
            <Image src={influencer1} width={250} />
          </div>
          <div className="p-4  rounded-md">
            <Image src={influencer2} width={250} />
          </div>
          <div className="p-4  rounded-md">
            <Image src={influencer3} width={250} />
          </div>
          <div className="p-4  rounded-md">
            <Image src={influencer4} width={250} />
          </div>
          <div className="p-4  rounded-md">
            <Image src={influencer5} width={250} />
          </div>
          <div className="p-4 rounded-md ">
            <Image src={influencer6} width={250} />
          </div>
          <div className="p-4  rounded-md">
            <Image src={influencer7} width={250} />
          </div>
          <div className="p-4  rounded-md">
            <Image src={influencer8} width={250} />
          </div>
        </div> */}
      </div>
      <br />
      <br />
      <br />
      <div className="py-10">
        <div>
          <span className="flex items-center justify-center lg:text-4xl md:text-3xl text-[26px] font-semibold text-green-500 uppercase pb-5">
            Features
          </span>
        </div>

        <div className=" bg-white pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4">
            <div className="p-4 rounded-md flex items-center justify-center font-medium">
              <Features
                features={fe1}
                info="Leading global trends impacting India"
              />
            </div>
            <div className="p-4  rounded-md flex items-center justify-center font-medium">
              <Features
                features={fe2}
                info="Curated specialized for India's Leaders"
              />
            </div>
            <div className="p-4  rounded-md flex items-center justify-center font-medium">
              <Features features={fe3} info="Personalized reading experience" />
            </div>
            <div className="p-4  rounded-md flex items-center justify-center font-medium">
              <Features features={fe3} info="One of a kind knowledge portal" />
            </div>
            <div className="p-4  rounded-md flex items-center justify-center font-medium">
              <Features
                features={fe2}
                info="Content available in multiple Indian languages"
              />
            </div>
            <div className="p-4  rounded-md flex items-center justify-center font-medium">
              <Features
                features={fe1}
                info="Content written by subject matter experts"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="Mobileappsection xl:px-0 lg:px-8 md:px-8">
        <div className="container py-4 mx-auto lg:flex lg:h-128 lg:py-16 items-center justify-center lg:text-left md:text-center text-center  lg:pb-2 pb-8">
          <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
            <div className="max-w-lg">
              <h1 className="xl:text-4xl md:text-3xl text-[26px] xl:leading-relaxed lg:leading-relaxed font-semibold text-green-500 uppercase text-center">
                Featuring a new trend everyday
              </h1>
              <p className="mt-4 text-black xl:text-xl md:text-lg xl:leading-[197%] lg:leading-[197%] sm:leading-[197%] md:leading-[197%] xl:text-left md:text-center text-center sm:px-0 px-8 font-medium">
                Enjoy access to bestselling book summaries and content from our
                partners, all available in audio or text segments.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="  mt-2 lg:w-[420px] w-[320px] px-8 lg:pt-0 pt-8">
              <Image src={summarry} />
            </div>
          </div>
        </div>
        <div
          className="container py-4 mx-auto lg:flex lg:h-128 lg:py-16 items-center justify-center  md:flex"
          id="mission"
        >
          <div className="flex items-center lg:w-[420px] w-[320px] px-8 lg:pt-0 pt-8">
            <Image src={audio} />
          </div>
          <div className="flex items-center justify-center w-full mt-2 lg:h-96 lg:w-1/2">
            <div className="max-w-lg">
              <h1 className="xl:text-4xl md:text-3xl text-[26px]  xl:leading-relaxed lg:leading-relaxed font-semibold text-green-500 uppercase text-center sm:px-0 px-4 sm:pt-0 pt-4">
                Real world examples to enhance learning
              </h1>
              <p className="mt-4 text-black xl:text-xl md:text-lg xl:leading-[197%] lg:leading-[197%] sm:leading-[197%] md:leading-[197%] xl:text-left md:text-center text-center sm:px-0 px-8 font-medium">
                Enjoy access to bestselling book summaries and content from our
                partners, all available in audio or text segments.
              </p>
              <div className="mt-6"></div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="pb-7 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 bg-gray-50">
        <div className=" rounded-md flex items-center justify-center">
          <Image src={homeimage} />
        </div>
        <div className=" rounded-md flex items-center justify-center">
          <div
            className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2"
            style={{ padding: "1.2rem" }}
          >
            <div className=" rounded-md flex items-center justify-start lg:pr-16">
              <span className="lg:text-4xl md:text-2xl text-xl text-green-500 font-semibold uppercase">
                Ideopedia is trusted and loved by India's leading influencers
              </span>
            </div>
            <div className=" pt-5 rounded-md flex items-center justify-center lg:pr-36">
              <p className="lg:text-xl md:text-lg text-sm text-black-700">
                An India where the power of ideas and their successful
                implementation ensures prosperity, equity, and well-being for
                all its citizens.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="flex justify-center items-center text-bold pt-10 pb-2 px-10">
        <span className="flex items-center justify-center lg:text-4xl md:text-3xl text-[26px] font-semibold text-green-500 uppercase">
          TESTIMONALS
        </span>
      </div>
      <div>
        <div className="p-2 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 sm:mx-4 mx-1">
          <div className="p-4 rounded-md flex items-center justify-center bg-white md:py-5 py-5 dropshadow">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
              <div className=" p-4 rounded-md flex items-center justify-center">
                <div className="w-auto h-auto bg-green-500 flex justify-center items-center high">
                  <span className="text-white font-semibold lg:text-xl md:text-lg text-sm text-center">
                    I commend Ideopedia for this service to our nation!
                  </span>
                </div>
              </div>
              <div className="sm:p-4  rounded-md flex items-center justify-center">
                <div className="w-auto h-auto flex justify-center items-center high">
                  <span className="p-2 text-black lg:text-lg md:text-lg text-sm text-center font-medium">
                    Ideopedia is an incredible initiative. The synopses are
                    highly informative and they make for great short reads. They
                    provide deep insights on relevant and timely subjects
                    researched by the worlds leading thinkers, I commend
                    Ideopedia for this service to our nation.
                  </span>
                </div>
              </div>
              <div className="p-4 rounded-md flex items-center justify-center">
                <div>
                  <Image src={test} />
                </div>
                <div className="pl-5">
                  <div className="lg:text-lg md:text-lg text-base font-semibold">
                    Mr Jayant Sinha
                  </div>
                  <div className="text-[14px] font-medium text-gray-500 uppercase">
                    Former Minister of Civil Aviation
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-md flex items-center justify-center bg-white dropshadow">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
              <div className=" p-4 rounded-md flex items-center justify-center">
                <div className="w-auto h-auto bg-green-500 flex justify-center items-center high">
                  <span className="text-white lg:text-xl md:text-lg text-sm font-semibold text-center">
                    I applaud Ideopedia for the stellar work!
                  </span>
                </div>
              </div>
              <div className="sm:p-4  rounded-md flex items-center justify-center">
                <div className="w-auto h-auto flex justify-center items-center high">
                  <span className="p-2 text-black lg:text-lg md:text-lg text-sm text-center font-medium">
                    Knowledge is among the most precious gifts in the world. As
                    an Indian, and a constant seeker of knowledge I truly
                    applaud Ideopedia for the stellar work they are doing in
                    sharing such incredible knowledge with our country.
                  </span>
                </div>
              </div>
              <div className="p-4 rounded-md flex items-center justify-center">
                <div>
                  <Image src={testflu} />
                </div>
                <div className="pl-5">
                  <div className="lg:text-lg md:text-lg text-base font-semibold">
                    Mr Rajiv Kumar
                  </div>
                  <div className="text-[14px] font-medium text-gray-500">
                    VICE CHAIRMAN OF NITI AAYOG, INDIA
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" p-4 rounded-md flex items-center justify-center bg-white dropshadow">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
              <div className=" p-4 rounded-md flex items-center justify-center">
                <div className="w-auto h-auto bg-green-500 flex justify-center items-center high">
                  <span className="text-white lg:text-xl md:text-lg text-sm font-semibold text-center">
                    My gratitude to Ideopedia's founders for the gift of
                    knowledge
                  </span>
                </div>
              </div>
              <div className="sm:p-4  rounded-md flex items-center justify-center">
                <div className="w-auto h-auto flex justify-center items-center high">
                  <span className="p-2 text-black lg:text-lg md:text-lg text-sm text-center font-medium">
                    I look forward to reading Ideopedia's synopsis as their
                    choice of books, topics and content are interesting and
                    value adding. My gratitude to Ideopedia's founders for
                    sharing the precious gift of knowledge.
                  </span>
                </div>
              </div>
              <div className="p-4 rounded-md flex items-center justify-center">
                <div>
                  <Image src={testfl} />
                </div>
                <div className="pl-5">
                  <div className="lg:text-lg md:text-lg text-base font-semibold">
                    Mr S Ramadorai
                  </div>
                  <div className="text-[14px] font-medium text-gray-500">
                    FORMER CEO, TATA CONSULTANCY SERVICES
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 flex lg:justify-end justify-center items-end ">
        <div className="border-[2px] border-green-500 cursor-pointer rounded-md px-1">
          <Link href="/testimonials#readers">
            <div className="p-1 flex justify-center items-center border-green-500">
              <div className="text-green-500 text-[18px]">Read more</div>
              <div className="pt-2 px-1">
                <Image src={rightarr} width={20} />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
