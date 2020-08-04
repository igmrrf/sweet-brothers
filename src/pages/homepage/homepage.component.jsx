import React from "react";
import "./homepage.styles.scss";
import "../../components/directory/directory.component";
import Directory from "../../components/directory/directory.component";

export const Homepage = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};
