import React from "react";

const NotesContainer = (props) => {
  return (
    <div>
      <div className="w-[220px] h-[180px] rounded-lg bg-[#F9D371]">
        <div className="flex p-2 pt-4">
          <div>
            <input
              style={{ marginRight: "6px" }}
              className="form-check-input appearance-none h-4 w-4 border border-black  rounded-sm bg-white checked:bg-black checked:border-black focus-within:hidden transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              value=""
              checked={props.val}
              id="flexCheckDefault"
            ></input>
          </div>
          <div className="flex justify-center items-center text-center text-black text-[18px] pl-2">
            {props.info}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesContainer;
