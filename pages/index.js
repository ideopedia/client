import Head from "next/head";
import InfluencerSlider from "../components/influencer";
import card1 from "../public/Card_1.svg";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import audio from "../public/audio.svg";
import summarry from "../public/summary.svg";
import download from "../public/download.svg";
import TextSelector from "text-selection-react";
import test from "../public/test.svg";
import Link from "next/link";
import rightarr from "../public/rightarr.svg";
import homeimage from "../public/homeimage.svg";
import influencer1 from "../public/influencer1.svg";
import influencer2 from "../public/influencer2.svg";
import influencer3 from "../public/influencer3.svg";
import influencer4 from "../public/influencer4.svg";
import influencer5 from "../public/influencer5.svg";
import influencer6 from "../public/influencer6.svg";
import influencer7 from "../public/influencer7.svg";
import influencer8 from "../public/influencer8.svg";
import sampInf from "../public/infTest.svg"
import Hero from "../components/hero";
import InfluencerSliderleft from "../components/infuslide";
import InfluencerSliderright from "../components/infuslideright";
import { useState, useCallback, useEffect } from "react";
export default function Home() {
  // const [width, setWidth] = useState(250);
  const [data, setData] = useState("");
  function handleMouseUp() {
    setData(window.getSelection().toString());
    return <div className="fixed z-20 top-30  text-red-900 ">hello</div>;
  }

  return (
    <div onMouseUp={handleMouseUp}>
      <Head>
        <title>Ideopedia</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <div className="wavebgr">
        {/* {console.log(data)} */}
        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 descIdeo pb-9">
          <div class="rounded-md flex items-center justify-center">
            <span className="lg:text-[26px]">An Invitation-only platform</span>
          </div>
          <div class="rounded-md flex items-center justify-center cutEdg">
            <span className="lg:text-[26px] text-black font-semibold cutEdg">
              THAT SHARES CUTTING-EDGE IDEAS WITH
            </span>
          </div>
          <div class="rounded-md flex items-center justify-center greenBtn">
            <div className=" h-12 bg-green-500  justify-center items-center high">
              <span className="p-5 text-white font-semibold">
                THE TOP 5000 INFLUENCERS IN INDIA
              </span>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-4">
          <div
            class=" flex items-center justify-center infPic"
            style={{ borderRadius: "200rem" }}
          >
              <Image
                src={influencer1}
                width={250}
                style={{ borderRadius: "200px" }}
              />
          </div>
          <div class="p-4  rounded-md flex items-center justify-center infPic">
            <Image src={influencer2} width={250} />
          </div>
          <div class="p-4  rounded-md flex items-center justify-center infPic">
            <Image src={influencer3} width={250} />
          </div>
          <div class="p-4  rounded-md flex items-center justify-center infPic">
            <Image src={influencer4} width={250} />
          </div>
          <div class="p-4  rounded-md flex items-center justify-center infPic">
            <Image src={influencer5} width={250} />
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-4">
          <div class="p-4  rounded-md flex items-center justify-center"></div>
          <div class=" rounded-md flex items-center justify-center infPic ">
            <Image src={influencer6} width={250} />
          </div>
          <div class="p-4  rounded-md flex items-center justify-center infPic">
            <Image src={influencer7} width={250} />
          </div>
          <div class="p-4  rounded-md flex items-center justify-center infPic">
            <Image src={influencer8} width={250} />
          </div>
          <div class="p-4  rounded-md flex items-center justify-center"></div>
        </div>
        {/* <div class="infPics pt-9 text-center">
          <div class="p-4 rounded-md">
            <Image src={influencer1} width={250} />
          </div>
          <div class="p-4  rounded-md">
            <Image src={influencer2} width={250} />
          </div>
          <div class="p-4  rounded-md">
            <Image src={influencer3} width={250} />
          </div>
          <div class="p-4  rounded-md">
            <Image src={influencer4} width={250} />
          </div>
          <div class="p-4  rounded-md">
            <Image src={influencer5} width={250} />
          </div>
          <div class="p-4 rounded-md ">
            <Image src={influencer6} width={250} />
          </div>
          <div class="p-4  rounded-md">
            <Image src={influencer7} width={250} />
          </div>
          <div class="p-4  rounded-md">
            <Image src={influencer8} width={250} />
          </div>
        </div> */}
      </div>
      <br />
      <br />
      <br />
      <div>
        <div id="feat">
          <span className="flex items-center justify-center lg:text-2xl font-semibold text-green-500 uppercase">
            Features
          </span>
        </div>

        <div class="p-6 bg-white-300">
          <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
            <div class=" rounded-md flex items-center justify-center">
              <Image src={card1} />
            </div>
            <div class="p-4  rounded-md flex items-center justify-center">
              <Image src={card1} />
            </div>
            <div class="p-4  rounded-md flex items-center justify-center">
              <Image src={card1} />
            </div>
            <div class="p-4  rounded-md flex items-center justify-center">
              <Image src={card1} />
            </div>
            <div class="p-4  rounded-md flex items-center justify-center">
              <Image src={card1} />
            </div>
            <div class="p-4  rounded-md flex items-center justify-center">
              <Image src={card1} />
            </div>
          </div>
        </div>
      </div>
      <div className="Mobileappsection">
        <div className="container px-6 py-4 mx-auto lg:flex lg:h-128 lg:py-16 items-center justify-center  md:flex">
          <div className="flex flex-col items-center w-full lg:flex-row lg:w-[540px]">
            <Image src={audio} />
          </div>
          <div className="flex items-center justify-center w-full mt-2 lg:h-96 lg:w-1/2">
            <div className="max-w-lg">
              <h1 className="text-xl lg:text-2xl font-semibold text-green-500 uppercase">
                Available in audio & text formats.
              </h1>
              <p className="mt-4 text-black text-xl">
                Enjoy access to bestselling book summaries and content from our
                partners, all available in audio or text segments.
              </p>
              <div className="mt-6"></div>
            </div>
          </div>
        </div>
        <div className="container px-6 py-4 mx-auto md:flex lg:flex lg:h-128 lg:py-16 items-center justify-center">
          <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
            <div className="max-w-lg">
              <h1 className="text-xl lg:text-2xl font-semibold text-green-500 uppercase">
                Available in audio & text formats.
              </h1>
              <p className="mt-4 text-black text-xl">
                Enjoy access to bestselling book summaries and content from our
                partners, all available in audio or text segments.
              </p>
              <div className="mt">
                <a className=" ">
                  <Image src={download} width={320}/>
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full mt-2 lg:h-96 lg:w-[560px]">
            <Image src={summarry} />
          </div>
        </div>
      </div>
      <div class="pb-7 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 bg-gray-50">
        <div class=" rounded-md flex items-center justify-center">
          <Image src={homeimage} />
        </div>
        <div class=" rounded-md flex items-center justify-center">
          <div
            class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2"
            style={{ padding: "1.2rem" }}
          >
            <div class=" rounded-md flex items-center justify-start">
              <span className="text-2xl text-green-500 font-semibold uppercase">
                Ideopedia is trusted and loved by India's leading influencers
              </span>
            </div>
            <div class=" rounded-md flex items-center justify-center">
              <span className="text-xl text-black-700">
                An India where the power of ideas and their successful
                implementation ensures prosperity, equity, and well-being for
                all its citizens.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center text-2xl text-bold p-10">
        <span className="flex items-center justify-center lg:text-2xl font-semibold text-green-500 uppercase">
          TESTIMONALS
        </span>
      </div>
      <div>
        <div class="p-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
          <div class=" rounded-md flex items-center justify-center bg-white dropshadow">
            <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
              <div class=" p-4 rounded-md flex items-center justify-center">
                <div className="w-auto h-auto bg-green-500 flex justify-center items-center high">
                  <span className="text-white text-xl text-center">
                    Selfless service at its best so that our country benefits
                  </span>
                </div>
              </div>
              <div class="p-4  rounded-md flex items-center justify-center">
                <div className="w-auto h-auto flex justify-center items-center high">
                  <span className="p-2 text-black text-lg ">
                    Month after month, year after year, Ideopedia has been
                    mailing thousands of printed copies of its synopses to its
                    readers with the goal to increase the awareness of the
                    people.Selfless service at its best so that our country
                    benefits.
                  </span>
                </div>
              </div>
              <div class="p-4 rounded-md flex items-center justify-center">
                <div>
                  <Image src={test} />
                </div>
                <div className="pl-5">
                  <h1 className="text-xl font-semibold">Mr Suresh Prabhu</h1>
                  <div className="text-[13px] font-medium text-gray-500">
                    FORMER MINISTER OF COMMERCE & INDUSTRY GOVERNMENT OF INDIA
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="py-6 rounded-md flex items-center justify-center bg-white dropshadow">
            <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
              <div class=" p-4 rounded-md flex items-center justify-center">
                <div className="w-auto h-auto bg-green-500 flex justify-center items-center high">
                  <span className="text-white text-xl text-center">
                    Selfless service at its best so that our country benefits
                  </span>
                </div>
              </div>
              <div class="p-4  rounded-md flex items-center justify-center">
                <div className="w-auto h-auto flex justify-center items-center high">
                  <span className="p-2 text-black text-lg ">
                    Month after month, year after year, Ideopedia has been
                    mailing thousands of printed copies of its synopses to its
                    readers with the goal to increase the awareness of the
                    people.Selfless service at its best so that our country
                    benefits.
                  </span>
                </div>
              </div>
              <div class="p-4 rounded-md flex items-center justify-center">
                <div>
                  <Image src={test} />
                </div>
                <div className="pl-5">
                  <h1 className="text-xl font-semibold">Mr Suresh Prabhu</h1>
                  <div className="text-[13px] font-medium text-gray-500">
                    FORMER MINISTER OF COMMERCE & INDUSTRY GOVERNMENT OF INDIA
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class=" rounded-md flex items-center justify-center bg-white dropshadow">
            <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
              <div class=" p-4 rounded-md flex items-center justify-center">
                <div className="w-auto h-auto bg-green-500 flex justify-center items-center high">
                  <span className="text-white text-xl text-center">
                    Selfless service at its best so that our country benefits
                  </span>
                </div>
              </div>
              <div class="p-4  rounded-md flex items-center justify-center">
                <div className="w-auto h-auto flex justify-center items-center high">
                  <span className="p-2 text-black text-lg ">
                    Month after month, year after year, Ideopedia has been
                    mailing thousands of printed copies of its synopses to its
                    readers with the goal to increase the awareness of the
                    people.Selfless service at its best so that our country
                    benefits.
                  </span>
                </div>
              </div>
              <div class="p-4 rounded-md flex items-center justify-center">
                <div>
                  <Image src={test} />
                </div>
                <div className="pl-5">
                  <h1 className="text-xl font-semibold">Mr Suresh Prabhu</h1>
                  <div className="text-[13px] font-medium text-gray-500">
                    FORMER MINISTER OF COMMERCE & INDUSTRY GOVERNMENT OF INDIA
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 flex justify-end items-end ">
        <div className="border-[2px] border-green-500 cursor-pointer rounded-md px-1">
          <Link href="/testimonials">
            <div className="p-1 flex justify-center items-center border-green-500">
              <div className="text-green-500 text-[16px]">Read more </div>
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
