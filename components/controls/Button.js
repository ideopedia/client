import React from "react";

function Button({ play, isPlaying }) {
  return (
    <div className="btn-container">
      <div className="">
        <div
          onClick={play}
          className={isPlaying ? "btn-stop" : "btn-play"}
        ></div>
      </div>
    </div>
  );
}
export default Button;
