import React, { useState } from "react";

function ToggleMessageComponent() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide Message" : "Show message "}
      </button>

      {isVisible && (
        <p style={{ marginTop: "10px", color: "blue" }}>
          Hello, this is a secret message!
        </p>
      )}
    </div>
  );
}

export default ToggleMessageComponent;
