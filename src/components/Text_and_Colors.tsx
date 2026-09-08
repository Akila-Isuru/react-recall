import React from "react";

function Text_and_Colors() {
  return (
    <div className="bg-slate-900 min-h-screen p-4 flex flex-col items-center">
      <h1 className="text-center text-red-500 text-xl font-bold max-w-3xl mx-auto">
        Lets learn Tailwind !
      </h1>
      <p className="text-white text-sm text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quidem
        commodi accusantium libero aliquid alias tempora, repellat
        necessitatibus non neque eligendi atque doloribus incidunt consequuntur
        maxime aperiam dolorum, voluptas quo.
      </p>
      <button
        className="bg-red-500 rounded-full
       text-white p-3 mt-3
       hover:bg-red-400
       focus:outline-none
       focus:ring-2
       focus :ring-red-400
       "
      >
        Click here
      </button>
    </div>
  );
}

export default Text_and_Colors;
