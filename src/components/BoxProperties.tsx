import React from "react";

function BoxProperties() {
  return (
    <div p-7>
      <div
        className="bg-red-500 p-20 w-60 h-60 m-4 
      items-center flex flex-col justify-center
      text-3xl text-white font-bold
      rounded-lg"
      >
        Box1
      </div>

      <div className="p-20 bg-blue-400">
        <h2>Box Propertise</h2>
        <div
          className="p-10 bg-red-500 rounded-lg border-white border-2 
        shadow-2xl"
        >
          Box 2
        </div>
      </div>
      <div className="p-20 bg-orange-300 flex flex-raw justify-center">
        <button className="bg-green-300 p-4 rounded-lg mr-2">Click me</button>
        <button className="bg-green-300 p-4 rounded-lg mr-2">Click me</button>
        <button className="bg-green-300 p-4 rounded-lg mr-2">Click me</button>
        <button className="bg-green-300 p-4 rounded-lg mr-2">Click me</button>
      </div>
    </div>
  );
}

export default BoxProperties;
