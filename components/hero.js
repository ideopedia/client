import React from "react";
import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SliderComponent from "../components/heroslider";
import { getCookies, getCookie, setCookies, removeCookies } from "cookies-next";

import { Player, Controls } from "@lottiefiles/react-lottie-player";
import bpoints from "../public/circle.svg";
import Navbar from "../components/navbar";
import Bullet from "../components/Bullet";

function Newhero() {
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
  const isBreakpoint = useMediaQuery(639);
  return (
    <div>
      <div className=" lg:h-screen">
        <div className="lg:flex justify-center items-center lg:pt-9 sm:pt-10">
          <div className="lg:flex lg:justify-between lg:items-center p-5">
            <div className="w-auto h-auto p-1 lg:pt-16">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:gap-6 lg:gap-5 sm:gap-4 gap-4">
                <div className=" rounded-md flex items-center justify-center">
                  <span className="xl:text-[41px] lg:text-[32px] sm:text-[34px] text-[20px] text-black font-medium ff">
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
                <div className="  rounded-md flex items-center justify-center">
                  <span className="xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] text-green-500 font-medium">
                    INDIA'S TOP LEADERS
                  </span>
                </div>
                <div className="xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[18px] flex items-center justify-center font-medium">
                  <span>one idea at a time</span>
                </div>
                <div className=" rounded-md flex items-center justify-center">
                  {getCookie("user") ? (
                    <Link href={`/dashboard/${getCookie('user')}`}>
                      <div className="getstarted xl:text-[22px] lg:text-[20px] font-medium">
                        <button className="font-bold">Get Started</button>
                      </div>
                    </Link>
                  ) : (
                    <Link href="/login">
                      <div className="getstarted gt xl:text-[25px] lg:text-[20px] text-white  ">
                        <button className="text -bold ">Get Started</button>
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div className="w-auto h-auto -z-50">
              <Player
                autoplay
                loop
                src="https://assets2.lottiefiles.com/private_files/lf30_ipvphpwo.json"
                className=" xl:w-[500px] xl:h-[500px] lg:w-[380px] lg:h-[400px] md:w-[400px] md:h-[400px] sm:w-[360px] sm:h-[360px] xl:pt-0 xl:pb-0 lg:pt-0 lg:pb-0 sm:pt-5 sm:pb-10"
              ></Player>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newhero;
