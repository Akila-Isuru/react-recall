import React from "react";

type LoginButtonProp = {
  isLoggedIn: boolean;
};
function AlertButton({ isLoggedIn }: LoginButtonProp) {
  return (
    <div>
      <button className="bg-black p-3 m-1 text-white">
        {/* isLoggedIn කියන එක true නම් 'Log Out', false නම් 'Log In' පෙන්වනවා */}
        {isLoggedIn ? "Log out" : "Log in"}
      </button>
    </div>
  );
}

function LoginButton() {
  return <AlertButton isLoggedIn={false} />;
}

export default LoginButton;
