import React, { useEffect } from "react";

// useEffect කියන්නේ මොකක්ද?
// React Component එකක ප්‍රධාන කාර්යය UI එකක් Render කරන එක. ඒත් UI එකෙන් පිටත වෙන දේවල් (External world එකත් එක්ක කෙරෙන වැඩ) අපි හඳුන්වන්නේ Side Effects කියලා.

// API එකකින් Data ගෙන ඒම (fetch)

// Browser Title එක වෙනස් කිරීම (document.title)

// Timers / Intervals තැබීම (setInterval)

function UseEffect() {
  useEffect(() => {
    [
      /*DEPENDENCY ARRAY */
    ];
  });

  return <div>UseEffect</div>;
}

export default UseEffect;
