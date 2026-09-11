import { useState } from "react";

export default function GreetingInput() {
  const [name, setName] = useState<string>("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name "
      />
      {name === "" ? (
        <p>Please entr your name</p>
      ) : (
        <p>Hello {name},Welcome!</p>
      )}
      <button onClick={() => setName("")}>Reset</button>
    </div>
  );
}
