import React from "react";
import Navbar from "../components/navbar";
import about from "../public/aboutus.svg";
import Image from "next/image";
import mission from "../public/mission.svg";
import vission from "../public/vission.svg";
import leafstart from "../public/leafstart.svg";
import leafend from "../public/leafend.svg";
import background from "../public/bg.svg";
import Link from "next/link";
const About = () => {
  return (
    <div>
      <Navbar />
      <div className="p-9">
        <div className="about_hero">
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
        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 pb-5 ">
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
        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 pb-9">
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
        <div class=" rounded-md flex items-start justify-start">
          <Image src={leafstart} />
        </div>
        <div class=" rounded-md flex items-end justify-end">
          <Image src={leafend} />
        </div>

        <div>
          <div class=" rounded-md flex items-center justify-center">
            <h1 className="text-3xl text-bold text-black pb-3">WHAT WE DO</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
