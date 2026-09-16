import React from "react";

function TransitionButton() {
  return (
    <div className="p-20 flex flex-col space-y-4 max-w-sm">
      {/* 1. Scale Up (hover කරද්දී Button එක ලොකු වෙනවා) */}
      <button
        className="p-4 bg-blue-500 rounded-lg text-white font-semibold
        hover:bg-blue-600 hover:scale-105 active:scale-95
        transform transition ease-out duration-300 shadow-md hover:shadow-lg"
      >
        1. Scale Up & Click Effect
      </button>

      {/* 2. Slide Up (උඩට Lift වෙන එක) */}
      <button
        className="p-4 bg-indigo-500 rounded-lg text-white font-semibold
        hover:-translate-y-1 hover:bg-indigo-600
        transform transition ease-out duration-300 shadow-md hover:shadow-xl"
      >
        2. Slide Up / Lift Effect
      </button>

      {/* 3. Smooth Color & Opacity Fade */}
      <button
        className="p-4 bg-emerald-500 text-white rounded-lg font-semibold
        hover:bg-emerald-600 hover:opacity-90
        transition-all ease-in-out duration-500"
      >
        3. Smooth Color Fade
      </button>

      {/* 4. Border Bounce (Border එකක් එන එක) */}
      <button
        className="p-4 bg-transparent border-2 border-purple-500 text-purple-500 font-semibold rounded-lg
        hover:bg-purple-500 hover:text-white
        transition-colors ease-out duration-300"
      >
        4. Outline to Solid Fill
      </button>

      {/* 5. Rotate & Translate (පැත්තට Move වෙලා ටිකක් කැරකෙන එක) */}
      <button
        className="p-4 bg-rose-500 rounded-lg text-white font-semibold
        hover:translate-x-2 hover:-rotate-1 hover:bg-rose-600
        transform transition ease-out duration-300"
      >
        5. Move & Slight Rotate
      </button>

      {/* 6. Pulse/Glow Shadow Effect */}
      <button
        className="p-4 bg-amber-500 rounded-lg text-white font-semibold
        hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-500/50
        transition-all ease-out duration-300"
      >
        6. Glow Shadow Effect
      </button>
    </div>
  );
}

export default TransitionButton;
