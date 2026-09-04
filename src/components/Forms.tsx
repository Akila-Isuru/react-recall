import React from "react";

function Forms() {
  return (
    <div className="flex flex-col gap-1 w-64 m-3">
      <label className="text-sm font-medium text-gray-600">Full Name</label>

      <input
        className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 placeholder:text-gray-400"
        placeholder="Enter your name..."
      />
    </div>
  );
}

export default Forms;
