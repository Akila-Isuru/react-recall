import React, { useState } from "react";

function UserBadge() {
  const [isOnline, setIsOnline] = useState<boolean>(false);

  return (
    <div>
      <h1>{isOnline ? "User is Online 🟢" : "User is Offline 🔴"}</h1>
      <button onClick={() => setIsOnline(!isOnline)}>Toggle Status</button>
    </div>
  );
}

export default UserBadge;
