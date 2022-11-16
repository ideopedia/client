import React from "react";
import Navbar from "../components/navbar";
import about from "../public/aboutus.svg";
import Image from "next/image";
import mission from "../public/mission.svg";
import vission from "../public/vission.svg";
import leafstart from "../public/leafstart.svg";
import Footer from "../components/footer";
import leafend from "../public/leafend.svg";
import startquotes from "../public/startquotes.svg";
import endquotes from "../public/endquotes.svg";
import aboutkeys from "../public/aboutkeys.svg";
import flower from "../public/flower.svg"
import abundantimage from "../public/abundantimage.svg";
import search from "../public/search.svg"
import searchMagic from "../public/searchMagic.svg"
import web from "../public/web.svg"
import background from "../public/bg.svg";
import Link from "next/link";
import { useCallback,useEffect,useState } from "react";
const About = () => {
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
      <div className="">
        <div className="about_hero1 pt-10" id="about_hero">
          <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
            <div class=" rounded-md flex items-center justify-center">
              <Image src={about} />
            </div>
            <div class=" p-4 rounded-md flex items-center justify-center">
              <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-8">
                <div class="rounded-md flex items-start justify-start">
                  <h1 className="text-3xl text-green-500 font-semibold">
                    WHAT IS IDEOPEDIA?
                  </h1>
                </div>
                <div class="mt-[1rem] rounded-md flex items-center justify-center">
                  <span className="text-2xl  text-gray-600 ">
                    Ideopedia is an invitation-only platform that identifies,
                    shares, and facilitates cutting-edge ideas with the top 5000
                    influencers in India. Ideopedia was founded on the belief
                    that sharing the right idea, at the right time, with the
                    right people, through the right platform creates immense
                    growth, innovation & creativity. Ideopedia is a non-profit
                    founded in 2005.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="missionpage">
        <div
          class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 pb-5 "
          id="mission"
        >
          <div class=" rounded-md flex items-center justify-center">
            <Image src={mission} />
          </div>
          <div class=" rounded-md flex items-center justify-center">
            <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
              <div class=" rounded-md flex items-start justify-start">
                <h1 className="text-3xl text-green-500 font-semibold pb-3 px-20">MISSION</h1>
              </div>
              <div class=" rounded-md flex items-center justify-center text-2xl  text-gray-600 px-20">
                To Inspire, Enable, and Facilitate the creation and nurturing of
                Ideas that can catalyse India,s path to unprecedented innovation
                and growth.
              </div>
            </div>
          </div>
        </div>
        <div
          class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 pb-9"
          id="vission"
        >
          <div class=" rounded-md flex items-center justify-center">
            <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
              <div class=" rounded-md flex items-start justify-start px-20">
                <h1 className="text-3xl text-green-500 font-semibold pb-3">VISION</h1>
              </div>
              <div class=" rounded-md flex items-center justify-center text-2xl  text-gray-600 px-20">
                An India where the power of ideas and their successful
                implementation ensures prosperity, equity, and well-being for
                all its citizens.
              </div>
            </div>
          </div>
          <div class=" rounded-md flex items-center justify-center">
            <Image src={vission} />
          </div>
        </div>
        </div>
        {/* <div class="rounded-md flex items-start justify-start">
          <Image src={leafstart} />
        </div>
        <div class="rounded-md flex items-end justify-end">
          <Image src={leafend} />
        </div> */}
        <div style={{position:"relative",bottom:`${isBreakpoint?"11rem":"7rem"}`,marginBottom:"-18rem"}}>
          <Image src={flower} width={isBreakpoint?100:200}/>
        </div>
        <div className="py-[6rem] pb-[13rem]" id="what">
          <div class="mb-[5rem]">
            <h1 className="text-3xl font-semibold text-green-500  text-center">WHAT WE DO</h1>
            <div className="text-right" style={{position:"relative",bottom:`${isBreakpoint?"13rem":"9rem"}`,marginBottom:"-13rem"}}>
            <Image src={flower} width={isBreakpoint?100:200}/>
              </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-2 pb-20 mx-[3rem]">
            <div class="p-10 rounded-md flex items-center justify-center  bg-white drop-shadow pb-9 cursor-pointer text-black  hover:bg-green-500 hover:text-white wwd">
              <div>
                <div className="text-3xl text-bold flex justify-center items-center">
                  <span>Ideas</span>
                </div>
                <div className=" p-4 pb-9 text-2xl text-bold flex justify-center items-center">
                  <span className="text-center">
                    We research and identify powerful ideas, global trends,
                    inventions and discoveries that are relevant to India.
                  </span>
                </div>
                <div className="text-center" style={{position:"relative",top:"6.5rem",marginTop:"-5rem"}}>
                  <Image src={searchMagic}/>
                </div>
              </div>
              
            </div>
            <div class="p-4 rounded-md flex items-center justify-center  bg-white drop-shadow pb-9 cursor-pointer text-black  hover:bg-green-500 hover:text-white wwd">
              <div>
                <div className="text-3xl text-bold flex justify-center items-center">
                  <span>Research</span>
                </div>
                <div className=" p-4 pb-9 text-2xl text-bold flex justify-center items-center">
                  <span className="text-center">
                    We research and identify powerful ideas, global trends,
                    inventions and discoveries that are relevant to India.
                  </span>
                </div>
                <div className="text-center" style={{position:"relative",top:"7rem",marginTop:"-5rem"}}>
                  <Image src={search}/>
                </div>
              </div>
            </div>
            <div class="p-4 rounded-md flex items-center justify-center  bg-white drop-shadow pb-9 cursor-pointer text-black  hover:bg-green-500 hover:text-white wwd">
              <div>
                <div className="text-3xl text-bold flex justify-center items-center">
                  <span>Discover</span>
                </div>
                <div className=" p-4 pb-9 text-2xl text-bold flex justify-center items-center">
                  <span className="text-center">
                    We research and identify powerful ideas, global trends,
                    inventions and discoveries that are relevant to India.
                  </span>
                </div>
                <div className="text-center" style={{position:"relative",top:"7rem",marginTop:"-5rem"}}>
                  <Image src={web}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-green-100 text-center  py-[4rem] flex items-center justify-center">
            <div className="">
              <div className="text-left ml-[1rem] aboutQuote">
                <Image src={startquotes} />
              </div>
              <span className="text-black text-3xl mx-[7rem] my-[2rem] bandf">
                We believe in and facilitate the transformational power of
                ideas.
              </span>
              <div className="text-right  aboutQuote mr-[1rem]">
                <Image src={endquotes} />
              </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 pt-9 pb-9 keybgr">
          <div class=" rounded-md flex items-center justify-center">
            <Image src={aboutkeys} />
          </div>
          <div class="rounded-md flex items-center justify-center">
            <span className="text-2xl">
              The time has come for India to realize its true potential, and
              reach unprecedented heights of economic, social, and human
              potential to become a more prosperous, united, equitable, happy,
              and healthy nation.
            </span>
          </div>
        </div>
        <div className="py-20" id="goal">
          <div className="flex justify-center items-center">
            <span className="text-3xl font-semibold text-green-500 text-center">
              INDIA'S ABUNDANT RESOURCES
            </span>
          </div>
          <div className="flex justify-center items-center p-10">
            <span className="text-2xl text-black-700 text-bold text-center lg:px-20">
              As the world's largest democracy with millions of Indians at the
              cusp of one of the biggest economic and social transformations
              globally, India is poised to make history and take the next leap
              by leveraging its abundant resources.
            </span>
          </div>
          <div className="flex justify-center items-center">
            <Image src={abundantimage} />
          </div>
        </div>
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default About;
