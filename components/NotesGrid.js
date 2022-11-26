import React from "react";

const NotesGrid = (props) => {
  return (
    <div>
      <div className="flex items-center p-4 w-full h-auto">
        <div>
          <input
            style={{ marginRight: "6px" }}
            class="form-check-input appearance-none h-4 w-4 border border-black rounded-sm bg-white checked:bg-black checked:border-black focus-within:hidden transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            checked={props.val}
          ></input>
        </div>
        <div className="pl-3 pt-1">
          <span className="text-[16px] text-center ">{props.info}</span>
        </div>
      </div>
    </div>
  );
};

export default NotesGrid;
