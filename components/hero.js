import React from "react";
import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SliderComponent from "../components/heroslider";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import bpoints from "../public/circle.svg";
import Navbar from "../components/navbar";
import Bullet from "./Bullet";

function Hero() {
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
  const isBreakpoint = useMediaQuery(800);
  return (
    <div>
      <Navbar />
      <div className="h-auto">
        <div className="bg-white heroTop">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 lg:h-screen">
            <div class=" rounded-md flex items-center justify-center">
              <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
                <div class=" rounded-md flex items-center justify-center">
                  <span className="text-[28px]  text-black font-medium iii">
                    INFORMING
                    <div className="bulletPoints">
                      {isBreakpoint ? (
                        <Bullet widthc="5" heightc="5" />
                      ) : (
                        <Bullet widthc="8" heightc="8" />
                      )}
                    </div>
                    INSPIRING
                    <div className="bulletPoints">
                      {isBreakpoint ? (
                        <Bullet widthc="5" heightc="5" />
                      ) : (
                        <Bullet widthc="8" heightc="8" />
                      )}
                    </div>
                    IMPACTING
                  </span>
                </div>
                <div class="  rounded-md flex items-center justify-center">
                  <span className="lg:text-[28px] text-xl text-green-500 font-medium">
                    INDIA’S TOP LEADERS
                  </span>
                </div>
                <div class="lg:text-[28px] rounded-md flex items-center justify-center font-medium">
                  <span>One idea at a time</span>
                </div>
                <div class=" rounded-md flex items-center justify-center">
                  <Link href="/signup">
                    <div className="getstarted lg:text-xl font-medium">
                      <button className="">Get Started</button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div class="rounded-md flex items-center justify-center">
              <SliderComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

{
  /*
<div className="container px-6 py-4 mx-auto lg:flex lg:h-128 lg:py-16 ">
                        <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
                            <div className="max-w-lg">
                                <h1 className="text-xl tracking-wide text-white text-gray-800 lg:text-3xl lg:text-4xl">Set your
                                    Title</h1>
                                <p className="mt-4  text-black">Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae
                                    laudantium quod rem voluptatem eos accusantium cumque.</p>
                                <div className="mt-6">
                                    <a href="#"
                                        className=" px-3 py-2  text-center text-white transition-colors duration-200 transform get">
                                        Get Started</a>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-full mt-2 lg:h-96 lg:w-1/2">

                           
                                <SliderComponent />
                            


                        </div>
                    </div>
*/
}
