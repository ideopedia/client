import React from "react";
import Image from "next/image";
import font from "../public/font.svg";
import sound from "../public/sound.svg";
import forward from "../public/forward.svg";
import content from "../public/content.svg";
import read from "../public/read_add.svg";
import audioimg from "../public/audioimg.svg";
import light from "../public/light.svg";
import Audio from "../components/Audio";
const Data = () => {
  return (
    <div>
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 pb-1 px-[1.7rem]">
        <div className=" rounded-md flex items-center justify-start cursor-pointer">
          <div className="ideoIcons">
            <Image src={forward} width={30} height={30} />
          </div>
        </div>
        <div className=" rounded-md flex items-center justify-center">
          <div>
            <div className=" text-black text-bold ideoHead">IDEO II</div>
          </div>
        </div>
        <div className="rounded-md flex items-center justify-end">
          <div>
            <div className="p-2 RightIcons cursor-pointer">
              <Image src={content} />
            </div>
            <div className="p-2   RightIcons cursor-pointer">
              <Image src={read} />
            </div>
            <div className=" RightIcons cursor-pointer">
              <Image src={light} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">fksfkwefkwefkm</div>
      <div className="flex justify-center items-center pt-2">
        <Image src={audioimg} />
      </div>
      <div className="flex justify-center items-center pt-2">
        <Audio />
      </div>
    </div>
  );
};

export default Data;
