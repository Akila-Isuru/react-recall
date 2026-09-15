import React from "react";

function Colors() {
  return (
    <div className="p-20 bg-black w-screen h-screen">
      <div className="p-7 bg-red-100 rounded-lg"></div>
      <div className="p-7 bg-red-200 rounded-lg"></div>
      <div className="p-7 bg-red-300 rounded-lg"></div>
      <div className="p-7 bg-red-400 rounded-lg"></div>
      <div className="p-7 bg-red-500 rounded-lg"></div>
      <div className="p-7 bg-red-600 rounded-lg"></div>
      <div className="p-7 bg-red-700 rounded-lg"></div>
      <div className="p-7 bg-red-800 rounded-lg"></div>
      <div className="p-7 bg-red-900 rounded-lg"></div>

      <div className="flex flex-raw justify-center items-center m-2">
        <button
          className="p-5 bg-blue-400
        rounded-lg 
        text-blue-700
        hover:bg-blue-500
        hover: text-white
        "
        >
          Hover me{" "}
        </button>
      </div>
    </div>
  );
}

export default Colors;
