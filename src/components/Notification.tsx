import React, { useState } from "react";

function Notification() {
  const [isOnline, setIsOnline] = useState<boolean>(true);
  return <div>
    {isOnline && <p>"You have a new message! 🔔"</p>}
    <button onClick={()=>setIsOnline(!isOnline)}>Clear Notification</button>
  </div>;
}

export default Notification;
