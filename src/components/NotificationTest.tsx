import { useState } from "react";

function NotificationTest() {
  const [hasMessage, setHasMessage] = useState<boolean>(true);
  return (
    <div>
      {hasMessage && <p>you have a new message!</p>}
      <button onClick={() => setHasMessage(false)}>Clear Notification</button>
    </div>
  );
}

export default NotificationTest;
