import React from "react";
import Navbar from "../components/navbar";
import Image from "next/image";
import Link from "next/link";
import founder1 from "../public/founder1.svg";
import founder2 from "../public/founder2.svg";
import bod1 from "../public/bod1.svg";
import bod2 from "../public/bod2.svg";
import bod3 from "../public/bod3.svg";

const Teams = () => {
  return (
    <div>
      <Navbar />
      <div className="p-5">
        <div class="pt-5 pb-4 rounded-md flex items-center justify-center">
          <span>The Team</span>
        </div>
        <div class=" rounded-md flex items-center justify-center">
          <span className="text-2xl text-semi-bold text-black">
            This is our team, a lot of smiling happy people who work hard to
            empower your teams
          </span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          <div class="p-4  rounded-md flex items-center justify-center">
            <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1">
              <div class="flex items-center justify-center">
                <Image src={bod1} />
              </div>
              <div class="rounded-md flex items-center justify-center">
                <span className="text-bold text-2xl text-black">
                  Mr Binod Kumar Bawri
                </span>
              </div>
              <div class="flex items-center justify-center">
                <span className="text-bold text-xl text-black">
                  Board of directors
                </span>
              </div>
            </div>
          </div>
          <div class="p-4  rounded-md flex items-center justify-center">
            <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1">
              <div class="flex items-center justify-center">
                <Image src={bod2} />
              </div>
              <div class="rounded-md flex items-center justify-center">
                <span className="text-bold text-2xl text-black">
                  Mr A Surya Prakash
                </span>
              </div>
              <div class="flex items-center justify-center">
                <span className="text-bold text-xl text-black">
                  Board of directors
                </span>
              </div>
            </div>
          </div>
          <div class="p-4  rounded-md flex items-center justify-center">
            <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1">
              <div class="flex items-center justify-center">
                <Image src={bod3} />
              </div>
              <div class="rounded-md flex items-center justify-center">
                <span className="text-bold text-2xl text-black">
                  Mr Swapan Dasgupta
                </span>
              </div>
              <div class="flex items-center justify-center">
                <span className="text-bold text-xl text-black">
                  Board of directors
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-8">
          <div class="p-4  rounded-md flex items-center justify-center">
            <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1">
              <div class="flex items-center justify-center">
                <Image src={founder1} />
              </div>
              <div class="rounded-md flex items-center justify-center">
                <span className="text-bold text-2xl text-black">
                  Malvika Bawri
                </span>
              </div>
              <div class="flex items-center justify-center">
                <span className="text-bold text-xl text-black">Founder</span>
              </div>
            </div>
          </div>
          <div class="p-4  rounded-md flex items-center justify-center">
            <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1">
              <div class="flex items-center justify-center">
                <Image src={founder2} />
              </div>
              <div class="rounded-md flex items-center justify-center">
                <span className="text-bold text-2xl text-black">
                  Ritesh Bawri
                </span>
              </div>
              <div class="flex items-center justify-center">
                <span className="text-bold text-xl text-black">Founder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
