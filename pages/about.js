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

import abundantimage from "../public/abundantimage.svg";
import background from "../public/bg.svg";
import Link from "next/link";
const About = () => {
  return (
    <div>
      <Navbar />
      <div className="p-9">
        <div className="about_hero" id="about_hero">
          <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
            <div class=" rounded-md flex items-center justify-center">
              <Image src={about} />
            </div>
            <div class=" p-4 rounded-md flex items-start justify-center">
              <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-8">
                <div class="rounded-md flex items-center justify-center">
                  <h1 className="text-3xl text-green-700">
                    WHAT IS IDEOPEDIA?
                  </h1>
                </div>
                <div class="p-9 rounded-md flex items-center justify-center">
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
        <div
          class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 pb-5 "
          id="mission"
        >
          <div class=" rounded-md flex items-center justify-center">
            <Image src={mission} />
          </div>
          <div class=" rounded-md flex items-center justify-center">
            <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
              <div class=" rounded-md flex items-start justify-center">
                <h1 className="text-3xl text-green-700 pb-3">MISSION</h1>
              </div>
              <div class=" rounded-md flex items-center justify-center text-2xl  text-gray-600 ">
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
              <div class=" rounded-md flex items-start justify-center">
                <h1 className="text-3xl text-green-700 pb-3">VISSION</h1>
              </div>
              <div class=" rounded-md flex items-center justify-center text-2xl  text-gray-600 ">
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
        <div class="rounded-md flex items-start justify-start">
          <Image src={leafstart} />
        </div>
        <div class="rounded-md flex items-end justify-end">
          <Image src={leafend} />
        </div>

        <div className="pb-9" id="what">
          <div class=" rounded-md flex items-center justify-center">
            <h1 className="text-3xl text-bold text-black pb-3">WHAT WE DO</h1>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-2">
            <div class="p-4 rounded-md flex items-center justify-center  bg-white drop-shadow pb-9 cursor-pointer">
              <div>
                <div className="text-3xl text-bold text-black flex justify-center items-center">
                  <span>Ideas</span>
                </div>
                <div className=" p-4 pb-9 text-2xl text-bold text-black flex justify-center items-center">
                  <span>
                    We research and identify powerful ideas, global trends,
                    inventions and discoveries that are relevant to India.
                  </span>
                </div>
              </div>
            </div>
            <div class="p-4 rounded-md flex items-center justify-center  bg-green-600 drop-shadow pb-9 cursor-pointer">
              <div>
                <div className="text-3xl text-bold text-white flex justify-center items-center">
                  <span>Research</span>
                </div>
                <div className=" p-4 pb-9 text-2xl text-bold text-white flex justify-center items-center">
                  <span>
                    We research and identify powerful ideas, global trends,
                    inventions and discoveries that are relevant to India.
                  </span>
                </div>
              </div>
            </div>
            <div class="p-4 rounded-md flex items-center justify-center  bg-white drop-shadow pb-9 cursor-pointer">
              <div>
                <div className="text-3xl text-bold text-black flex justify-center items-center">
                  <span>Discover</span>
                </div>
                <div className=" p-4 pb-9 text-2xl text-bold text-black flex justify-center items-center">
                  <span>
                    We research and identify powerful ideas, global trends,
                    inventions and discoveries that are relevant to India.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-green-100 h-auto w-auto">
          <div className="flex justify-start items-start">
            <Image src={startquotes} />
          </div>
          <div className="flex justify-center items-center">
            <span className="text-black text-3xl ">
              We believe in and facilitate the transformational power of ideas.
            </span>
          </div>
          <div className="flex justify-end items-end">
            <Image src={endquotes} />
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 pt-9 pb-9">
          <div class=" rounded-md flex items-center justify-center">
            <Image src={aboutkeys} />
          </div>
          <div class="rounded-md flex items-center justify-center">
            <span className="text-3xl">
              The time has come for India to realize its true potential, and
              reach unprecedented heights of economic, social, and human
              potential to become a more prosperous, united, equitable, happy,
              and healthy nation.
            </span>
          </div>
        </div>
        <div className="pt-9 pb-9" id="goal">
          <div className="flex justify-center items-center p-2">
            <span className="text-black-700 text-3xl text-bold">
              INDIA’S ABUNDANT RESOURCES
            </span>
          </div>
          <div className="flex justify-center items-center p-9">
            <span className="text-xl text-black-700 text-bold">
              As the world’s largest democracy with millions of Indians at the
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
