import { Fragment } from "react";
import { Redirect } from "react-router-dom";

const AdminGuard = ({ role, children }) => {
  if (role !== "Sudo") return <Redirect to="/login" />;
  else return <Fragment>{children}</Fragment>;
};

export default AdminGuard;
