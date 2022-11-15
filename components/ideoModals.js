import React from "react";

const IdeoModals = () => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className=" p-5 border-b border-solid border-slate-200 rounded-t">
              <div className="flex items-center justify-center text-xl font-bold ">
                Contents
              </div>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <textarea
                type="text"
                placeholder="Type here ....."
                className="focus:border-black"
                rows="10"
                cols="50"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default IdeoModals;
