// export default function App() {
//   return (
//     <div className="flex flex-col gap-4 p-8">
//       <div className="flex flex-col gap-1 w-64">
//         <label className="text-sm font-medium text-gray-600">Full Name</label>
//         <input
//           className="border border gray-100 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2
//           focus:ring-blue-200 placeholder:text-gray-400"
//           placeholder="Enter your name..."
//         />
//       </div>
//       <button className="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg w-64
//        hover:bg-blue-700 transition">
//         Submit
//       </button>
//     </div>
//   );
// }

// import React from "react";

// function Forms() {
//   return (
//     <div className="my-3 ml-4 flex flex-col">
//       <label className="text-sm font-medium text-gray-600">Email Address</label>
//       <input
//         className="border border-red-500
//         px-4 py-2
//         rounded-lg
//         w-200
//         focus:outline-none
//         focus:ring-2
//         focus:ring-red-200
//         placeholder:text-gray-400"
//         placeholder="Enter your email..."
//       />
//       <p className="text-xs text-red-500">
//         Please enter a valid email address.
//       </p>
//     </div>
//   );
// }

// export default Forms;

//        INPUT DISABLED

// import React from "react";

// function Forms() {
//   return (
//     <div className="flex flex-col p-2 ">
//       <label>User Id</label>
//       <input
//         disabled
//         value="user-1001"
//         className="
//       border border-gray-500
//       w-200
//       rounded-lg
//       px-4 py-2
//       focus:outline-none
//       focus:ring-2
//       focus:ring-blue-200
//       "
//       />
//     </div>
//   );
// }

// export default Forms;

//  DROP DOWNS

import React from "react";

// function Forms() {
//   return (
//     <div className="flex flex-col p-2">
//       <label className="">Select Country</label>
//       <select
//         className="border border-gray-500 w-60
//       rounded-lg
//       focus:outline-none
//       focus:border-blue-500
//       focus:ring-2
//       focus:ring-blue-200
//       text-gray-700
//       "
//       >
//         <option>Sri Lanka</option>
//         <option>India</option>
//         <option>Australia</option>
//       </select>
//     </div>
//   );
// }

// export default Forms;

//                                CHECK BOX

// export default function App() {
//   return (
//     <div className="p-8 flex">
//       {/* Checkbox + Label Container */}
//       <div className="flex gap-2">
//         <input
//           type="checkbox"
//           className="w-4 h-4 accent-blue-600 cursor-pointer"
//         />
//         <label className="text-sm font-medium text-gray-700 cursor-pointer">
//           Remember me
//         </label>
//       </div>
//     </div>
//   );
// }

//  TEXTAREA

// function Forms() {
//   return (
//     <div className="flex flex-col gap-1 p-8 w-100">
//       <label className="">Your message</label>
//       <textarea
//         rows={3}
//         className="
//       border border-gray-500
//       rounded-lg
//       px-4 py-2
//       resize-none

//       "
//         placeholder="write something"
//       ></textarea>
//     </div>
//   );
// }

// export default Forms;

// RADIO BUTTONS

export default function App() {
  return (
    <div className="flex flex-col gap-2 p-8">
      <label className="text-sm font-medium text-gray-600">Gender</label>

      {/* Radio buttons පේළිය */}
      <div className="flex items-center gap-4">
        {/* Option 1 */}
        <label
          className="flex items-center gap-2 
        cursor-pointer text-sm text-gray-700"
        >
          <input
            type="radio"
            name="gender"
            className="w-4 h-4 accent-blue-600"
          />
          Male
        </label>

        {/* Option 2 */}
        <label
          className="flex items-center gap-2 
        cursor-pointer text-sm text-gray-700"
        >
          <input
            type="radio"
            name="gender"
            className="w-4 h-4 accent-blue-600"
          />
          Female
        </label>
      </div>
    </div>
  );
}
