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
import Hero from "../components/hero";
import InfluencerSliderleft from "../components/infuslide";
import InfluencerSliderright from "../components/infuslideright";
import { useState, useEffect } from "react";
export default function Home() {
  const [width, setWidth] = useState(250);
  const [data, setData] = useState("");
  function handleMouseUp() {
    setData(window.getSelection().toString());
    return (<div className="fixed z-20 top-30  text-red-900 ">
      hello
    </div>)
    
  }
  const useWidth = () => {
    const [screenWidth, setScreenWidth] = useState(0);
    const handleResize = () => setScreenWidth(window.innerWidth);
    useEffect(() => {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [handleResize]);
    return screenWidth;
  };

  const screen = useWidth();
  useEffect(() => {
<<<<<<< HEAD
    return ()=>{
      if(screen<565){
        setWidth(155)
      }
      else{
        setWidth(250)
      }
=======
    console.log(screen);
    if (screen < 565) {
      setWidth(155);
    } else {
      setWidth(250);
>>>>>>> 8a710d27dab23f43c085b8412674c38ec4f27d34
    }
  }, [screen]);

  return (
    <div onMouseUp={handleMouseUp}>
      <Head>
        <title>Ideopedia</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <div>
        {console.log(data)}
        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 descIdeo">
          <div class="rounded-md flex items-center justify-center">
            <span className="text-xl">An Invitation-only platform</span>
          </div>
          <div class="rounded-md flex items-center justify-center cutEdg">
            <span className="text-xl text-black text-bold cutEdg">
              THAT SHARES CUTTING-EDGE IDEAS WITH
            </span>
          </div>
          <div class="rounded-md flex items-center justify-center greenBtn">
            <div className=" h-12 bg-green-700  justify-center items-center high">
              <span className="p-5 text-white">
                THE TOP 5000 INFLUENCERS IN INDIA
              </span>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div class="infPics" style={{ textAlign: "center" }}>
          <div class="p-4 rounded-md">
            <Image src={influencer1} width={width} />
          </div>
          <div class="p-4  rounded-md">
            <Image src={influencer2} width={width} />
          </div>
          <div class="p-4  rounded-md">
            <Image src={influencer3} width={width} />
          </div>
          <div class="p-4  rounded-md">
            <Image src={influencer4} width={width} />
          </div>
          <div class="p-4  rounded-md">
            <Image src={influencer5} width={width} />
          </div>
          <div class="p-4 rounded-md ">
            <Image src={influencer6} width={width} />
          </div>
          <div class="p-4  rounded-md">
            <Image src={influencer7} width={width} />
          </div>
          <div class="p-4  rounded-md">
            <Image src={influencer8} width={width} />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div>
        <div id="feat">
          <span>Features</span>
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
      <div className="bg-white">
        <div className="container px-6 py-4 mx-auto lg:flex lg:h-128 lg:py-16 ">
          <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
            <Image src={audio} />
          </div>
          <div className="flex items-center justify-center w-full mt-2 lg:h-96 lg:w-1/2">
            <div className="max-w-lg">
              <h1 className="text-xl tracking-wide text-green-800 text-gray-800 lg:text-xl lg:text-2xl">
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
      </div>
      <div className="bg-white">
        <div className="container px-6 py-4 mx-auto lg:flex lg:h-128 lg:py-16 ">
          <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
            <div className="max-w-lg">
              <h1 className="text-xl tracking-wide text-green-800 text-gray-800 lg:text-xl lg:text-2xl">
                Available in audio & text formats.
              </h1>
              <p className="mt-4  text-black text-xl">
                Enjoy access to bestselling book summaries and content from our
                partners, all available in audio or text segments.
              </p>
              <div className="mt-6">
                <a className=" ">
                  <Image src={download} width={400} />
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full mt-2 lg:h-96 lg:w-1/2">
            <Image src={summarry} />
          </div>
        </div>
      </div>
      <br />
      <div class="pb-7 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2">
        <div class=" rounded-md flex items-center justify-center">
          <Image src={homeimage} />
        </div>
        <div class=" rounded-md flex items-center justify-center">
          <div
            class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2"
            style={{ padding: "1.2rem" }}
          >
            <div class=" rounded-md flex items-center justify-start">
              <span className="text-2xl text-bold text-black-700">
                Ideopedia is trusted and loved by India’s leading influencers
              </span>
            </div>
            <div class=" rounded-md flex items-center justify-center">
              <span className="text-xl text-bold text-black-700">
                An India where the power of ideas and their successful
                implementation ensures prosperity, equity, and well-being for
                all its citizens.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center text-2xl text-bold">
        <span>TESTIMONALS</span>
      </div>
      <div>
        <div class="p-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
          <div class=" rounded-md flex items-center justify-center bg-white drop-shadow">
            <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
              <div class=" p-4 rounded-md flex items-center justify-center">
                <div className="w-auto h-auto bg-green-700 flex justify-center items-center high">
                  <span className="p-2 text-white text-xl ">
                    Selfless service at its best so that our country benefits
                  </span>
                </div>
              </div>
              <div class="p-4  rounded-md flex items-center justify-center">
                <div className="w-auto h-auto flex justify-center items-center high">
                  <span className="p-2 text-black text-xl ">
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
                  <h1 className="text-xl">Mr Suresh Prabhu</h1>
                  <div className="text-sm">
                    FORMER MINISTER OF COMMERCE & INDUSTRY GOVERNMENT OF INDIA
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class=" rounded-md flex items-center justify-center  bg-white drop-shadow">
            <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
              <div class=" p-4 rounded-md flex items-center justify-center">
                <div className="w-auto h-auto bg-green-700 flex justify-center items-center high">
                  <span className="p-2 text-white text-xl ">
                    Selfless service at its best so that our country benefits
                  </span>
                </div>
              </div>
              <div class="p-4  rounded-md flex items-center justify-center">
                <div className="w-auto h-auto flex justify-center items-center high">
                  <span className="p-2 text-black text-xl ">
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
                  <h1 className="text-xl">Mr Suresh Prabhu</h1>
                  <div className="text-sm">
                    FORMER MINISTER OF COMMERCE & INDUSTRY GOVERNMENT OF INDIA
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="  rounded-md flex items-center justify-center  bg-white drop-shadow">
            <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
              <div class=" p-4 rounded-md flex items-center justify-center">
                <div className="w-auto h-auto bg-green-700 flex justify-center items-center high">
                  <span className="p-2 text-white text-xl ">
                    Selfless service at its best so that our country benefits
                  </span>
                </div>
              </div>
              <div class="p-4  rounded-md flex items-center justify-center">
                <div className="w-auto h-auto flex justify-center items-center high">
                  <span className="p-2 text-black text-xl ">
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
                  <h1 className="text-xl">Mr Suresh Prabhu</h1>
                  <div className="text-sm">
                    FORMER MINISTER OF COMMERCE & INDUSTRY GOVERNMENT OF INDIA
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 flex justify-end items-end ">
        <div className="border border-green-600 cursor-pointer">
          <Link href="/testimonials">
            <div className="p-1 flex justify-center items-center border-green-600">
              <div className="text-green-700 text-2xl">Read more </div>
              <div className="pl-2 pt-1">
                <Image src={rightarr} />
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
