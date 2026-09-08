import React from "react";

// relative (Parent එකට) ---> "මගේ ඇතුළේ ඉන්න Absolute ළමයින්ගේ සීමාව මමයි"
// කියලා Parent Box එක හඳුන්වා දෙනවා.
// absolute top-2 right-2 (Child එකට) --> Parent ගේ මායිමේ ඉඳන් උඩින් 2ක් (top-2)
//  සහ දකුණෙන් 2ක් (right-2) ඇතුළට වෙන්න Badge එක තියනවා.

// export default function Positions() {
//   return (
//     <div className="p-8">
//       {/* Parent Box එක (relative) */}
//       <div
//         className="relative
//        w-32 h-32
//        bg-gray-200
//        rounded-lg p-4"
//       >
//         {/* Absolute Child Badge එක */}
//         <span
//           className="absolute top-2 right-2
//          w-4 h-4
//           bg-red-500
//           rounded-full"
//         ></span>

//         <p className="text-sm font-medium text-gray-700">Card Content</p>
//       </div>
//     </div>
//   );
// }

// function Positions() {
//   return (
//     <div className="p-8">
//       <div className="w-16 h-16 relative">
//         <div
//           className="w-16 h-16 bg-blue-500
//             rounded-full
//             flex items-center
//             justify-center
//             text-white font-bold
//             "
//         >
//           Ak
//         </div>
//         <span
//           className="absolute
//          bottom-0 right-0
//           w-4 h-4
//           bg-green-300
//           rounded-full
//           border-2
//           border-white
//         "
//         ></span>
//       </div>
//     </div>
//   );
// }

// export default Positions;
