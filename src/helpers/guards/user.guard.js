import { Fragment } from "react";

const UserGuard = ({ loggedIn, children }) => {
  if (loggedIn !== false) return <Fragment>{children}</Fragment>;
  else return <Fragment>{children}</Fragment>;
};

export default UserGuard;
