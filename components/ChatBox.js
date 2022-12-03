import React from "react";
import Image from "next/image";
import userfeed from "../public/userfeed.svg";
import userchat from "../public/userchat.svg";
const ChatBox = (props) => {
  return (
    <div className="bg-black drop-shadow rounded-md py-16 px-16">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 ">
        <div className="flex items-center justify-center">
          <Image src={userfeed} />
          <span className="pl-2 text-white text-xl">Feedback</span>
        </div>
        <div className="flex items-center justify-center pt-2">
          <span className="text-2xl text-white font-bold">{props.amt} Feedback</span>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
