import { Fragment } from "react";
import { Redirect } from "react-router-dom";

const AuthGuard = ({ loggedIn, children }) => {
  if (loggedIn !== "101") return <Redirect to="/login" />;
  else return <Fragment>{children}</Fragment>;
};

export default AuthGuard;
