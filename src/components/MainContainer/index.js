import React from "react";
import { useLocation } from "react-router-dom";
import AddDeleteContacts from "../AddDeleteContacts";
import Header from "../Header";

const MainContainer = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname === "/auth/login" || pathname === "/auth/register" ? (
        <main>{children}</main>
      ) : (
        <>
          <Header />
          <AddDeleteContacts />
          <main>{children}</main>
        </>
      )}
    </>
  );
};

export default MainContainer;
