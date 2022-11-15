import React from "react";
import Image from "next/image";

import userchat from "../public/userchat.svg";
const ChatBox = () => {
  return (
    <div className="w-[190px] h-[140px] bg-black drop-shadow-xl rounded-md">
      <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 ">
        <div class="p-3 flex items-center justify-center">
          <Image src={userchat} />
          <span className="pl-2 text-white text-xl">Chats</span>
        </div>
        <div class="flex items-center justify-center">
          <span className="text-2xl text-white font-bold">5 Chats</span>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
