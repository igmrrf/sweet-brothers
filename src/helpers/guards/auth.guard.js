import { Fragment } from "react";
import { Redirect } from "react-router-dom";

const AuthGuard = ({ loggedIn, children }) => {
  return <Fragment>{children}</Fragment>;
};

export default AuthGuard;
