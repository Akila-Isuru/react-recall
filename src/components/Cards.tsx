import React from "react";

function Cards() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-6 p-8 bg-slate-100 min-h-screen">
      <div className="bg-indigo-600 p-6 rounded-2xl shadow-xl max-w-xs w-full flex flex-col items-center gap-6 text-white">
        <h1 className="bg-white/20 py-2 w-full text-center rounded-xl text-xl font-bold">
          BASIC
        </h1>
        <h2 className="font-extrabold text-4xl">$9.99</h2>
        <ul className="space-y-2 text-center text-indigo-100 text-sm">
          <li>1 Project</li>
          <li>Basic Support</li>
          <li>5 GB Storage</li>
        </ul>
        <button className="bg-white text-indigo-600 font-bold py-3 w-full rounded-xl hover:bg-indigo-100 transition cursor-pointer">
          Buy Now
        </button>
      </div>

      <div className="bg-red-500 p-6 rounded-2xl shadow-xl max-w-xs w-full flex flex-col items-center gap-6 text-white">
        <h1 className="bg-white/20 py-2 w-full text-center rounded-xl text-xl font-bold">
          PRO
        </h1>
        <h2 className="font-extrabold text-4xl">$25.99</h2>
        <ul className="space-y-2 text-center text-red-100 text-sm">
          <li>10 Projects</li>
          <li>24/7 Priority Support</li>
          <li>50 GB Storage</li>
        </ul>
        <button className="bg-white text-red-600 font-bold py-3 w-full rounded-xl hover:bg-red-100 transition cursor-pointer">
          Buy Now
        </button>
      </div>

      <div className="bg-slate-800 p-6 rounded-2xl shadow-xl max-w-xs w-full flex flex-col items-center gap-6 text-white">
        <h1 className="bg-white/20 py-2 w-full text-center rounded-xl text-xl font-bold">
          ENTERPRISE
        </h1>
        <h2 className="font-extrabold text-4xl">$49.99</h2>
        <ul className="space-y-2 text-center text-slate-300 text-sm">
          <li>Unlimited Projects</li>
          <li>Dedicated Support</li>
          <li>500 GB Storage</li>
        </ul>
        <button className="bg-white text-slate-800 font-bold py-3 w-full rounded-xl hover:bg-slate-200 transition cursor-pointer">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Cards;
