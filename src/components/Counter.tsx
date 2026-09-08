import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>count : {count}</h1>
      <button
        className="bg-green-300 p-2 rounded-lg mr-1"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        className="bg-red-300 p-2 rounded-lg"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
