import React from "react";
import Navbar from "../components/navbar";
import Image from "next/image";
import readershero from "../public/readershero.svg";
import testimage2 from "../public/testimage2.svg";
import testwinner from "../public/testwinner.svg";
import startquotes from "../public/startquotes.svg";
import endquotes from "../public/endquotes.svg";
import testimage1 from "../public/testimage1.svg";
import SliderComponent from "../components/testimonialSlider";
import Footer from "../components/footer";
import TestSlides from "../components/testSlides";
import flower from "../public/testFlower.svg"
import { useEffect,useCallback,useState } from "react";
const OurReaders = () => {
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
  const isBreakpoint = useMediaQuery(450);
  return (
    <div>
      <Navbar />
      <div className="about_hero">
        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          <div class=" rounded-md flex items-center justify-center">
            <Image src={readershero} />
          </div>
          <div class=" p-4 rounded-md flex items-center justify-center">
            <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-8">
              <div class="rounded-md flex items-start justify-start">
                <h1 className="text-3xl text-green-500 font-semibold readHead">OUR READERS</h1>
              </div>
              <div class="rounded-md flex items-center justify-center">
                <span className="text-2xl  text-gray-600 readContent text-left">
                  Ideopedia's Readers are among the top 5000 influencers in
                  India. Our readers include leading policymakers, thought
                  leaders, top members of the judiciary and the legislature,
                  leading scientists, distinguished, top CEOs, academicians and
                  other luminaries. Our readers shape economic, public, and
                  social policy across India.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20">
        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          <div class=" p-4 rounded-md flex items-center justify-center">
            <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-8">
              <div class="pt-9 rounded-md flex items-center justify-center">
                <h1 className="text-3xl text-green-500 font-semibold readHead px-8">
                  TRUSTED AND LOVED BY INDIA'S LEADING INFLUENCERS
                </h1>
              </div>
              <div class="rounded-md flex items-center justify-center">
                <span className="pt-9 text-2xl  text-gray-600 readContent px-8">
                  Ideopedia has been a long-time favourite with its readers. Our
                  readers derive immense value from the information we share
                  with them.Ideopedia has been a long-time favourite with its
                  readers. Our readers derive immense value from the information
                  we share with them.
                </span>
              </div>
            </div>
          </div>
          <div class=" rounded-md flex items-center justify-center">
            <Image src={testimage2} />
          </div>
        </div>
      </div>
    <div className="flowerbg ">
      <div className="bg-green-100 p-10  py-[10rem]">
        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          <div class=" rounded-md flex items-center justify-center">
            <Image src={testwinner} />
          </div>
          <div class=" p-4 rounded-md flex items-center justify-center">
            <div className="bg-white h-auto w-auto rounded-md drop-shadow">
              <div className="flex justify-start items-start p-2">
                <Image src={startquotes} />
              </div>
              <br />
              <div className="flex justify-center items-center">
                <span className=" p-10 text-black lg:text-3xl text-xl text-center uppercase font-regular">
                  We are truly honoured and humbled by the feedback from our
                  readers.
                </span>
              </div>
              <br />
              <div className="flex justify-end items-end p-2">
                <Image src={endquotes} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div style={{textAlign:"right",position:"relative",bottom:"13rem",marginBottom:"-18rem"}}>
        {isBreakpoint?<Image src={flower} width={100}/>:<Image src={flower} width={200}/>}
        </div>
        <div className="flex justify-center items-center p-4">
          
          <span className="text-3xl font-semibold text-green-500">TESTIMONIALS</span>
        </div>
        <div className="pt-2 pl-9 pr-9 testi" id="readers">
            <SliderComponent />
        </div>
    </div>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default OurReaders;
