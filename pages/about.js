import React from "react";
import Navbar from "../components/navbar";
import about from "../public/aboutus.svg";
import Image from "next/image";
import mission from "../public/mission.svg";
import vission from "../public/vission.svg";
import background from "../public/bg.svg";
import Link from "next/link";
const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about_hero p-9">
        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          <div class=" rounded-md flex items-center justify-center">
            <Image src={about} />
          </div>
          <div class=" p-4 rounded-md flex items-start justify-center">
            <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-8">
              <div class="rounded-md flex items-center justify-center">
                <h1 className="text-3xl text-green-700">WHAT IS IDEOPEDIA?</h1>
              </div>
              <div class="p-9 rounded-md flex items-center justify-center">
                <span className="text-2xl  text-gray-600 ">
                  Ideopedia is an invitation-only platform that identifies,
                  shares, and facilitates cutting-edge ideas with the top 5000
                  influencers in India. Ideopedia was founded on the belief that
                  sharing the right idea, at the right time, with the right
                  people, through the right platform creates immense growth,
                  innovation & creativity. Ideopedia is a non-profit founded in
                  2005.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
        <div class=" rounded-md flex items-center justify-center">
          <Image src={mission} />
        </div>
        <div class=" rounded-md flex items-start justify-center">
          <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-8">
            <div class=" rounded-md flex items-center justify-center">
              <h1 className="text-3xl text-green-700">MISSION</h1>
            </div>
            <div class=" rounded-md flex items-center justify-center text-2xl  text-gray-600 ">
              To Inspire, Enable, and Facilitate the creation and nurturing of
              Ideas that can catalyse India,s path to unprecedented innovation
              and growth.
            </div>
            <div>wfojcwefncfmcwk</div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default About;
