import React from "react";
import Header from "../Header";

const MainContainer = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default MainContainer;
