import { isAllOf } from "@reduxjs/toolkit";
import React from "react";

type WelcomeMessageProp = {
  isLoggedIn: boolean;
};
function Alert({ isLoggedIn }: WelcomeMessageProp) {
  if (isLoggedIn) {
    return (
      <h1 className="text-green-400 font-bold text-xl m-3">
        Welcome back Developper !
      </h1>
    );
  }
  return (
    <h1 className="text-red-400 font-bold text-xl m-3">
      Please Log in first !
    </h1>
  );
}

function WelcomeMessage() {
  return <Alert isLoggedIn={true} />;
}

export default WelcomeMessage;
