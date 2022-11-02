import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
const Loader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Player
        autoplay
        loop
        src="https://lottie.host/349ef17c-7074-4894-ab94-8d4ff18e13b7/TJiXPL6mnr.json"
        style={{ height: "300px", width: "300px" }}
        
      ></Player>
    </div>
  );
};

export default Loader;
