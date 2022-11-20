import React from "react";
import Image from "next/image";
import userfeed from "../public/userfeed.svg";
import userchat from "../public/userchat.svg";
const ChatBox = (props) => {
  return (
    <div className="w-[190px] h-[140px] bg-black drop-shadow-xl rounded-md">
      <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 ">
        <div class="p-3 flex items-center justify-center">
          <Image src={userfeed} />
          <span className="pl-2 text-white text-xl">Feedback</span>
        </div>
        <div class="flex items-center justify-center">
          <span className="text-2xl text-white font-bold">{props.amt} Feedback</span>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
