import React from "react";

type LogProp = {
  isLoggedIn: boolean;
};

function LogStat({ isLoggedIn }: LogProp) {
  if (isLoggedIn) {
    return <h3>Welcome back !</h3>;
  }
  return <h3>Please Log in!</h3>;
}

function LoginStatus() {
  return <LogStat isLoggedIn={true} />;
}

export default LoginStatus;
