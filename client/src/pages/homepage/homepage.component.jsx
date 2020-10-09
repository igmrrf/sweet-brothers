import React from "react";
import "../../components/directory/directory.component";
import Directory from "../../components/directory/directory.component";
import { HomePageContainer } from "./hompage.styles";

export const Homepage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};
