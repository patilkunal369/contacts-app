import React from "react";
import { useLocation } from "react-router-dom";
import { isPathRegisterLogin } from "../../helpers/helperMethods";
import { isAuthenticated } from "../../helpers/isAuthenticated";
import AddDeleteContacts from "../AddDeleteContacts";
import Header from "../Header";

const MainContainer = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <>
      {isPathRegisterLogin(pathname) ? (
        <>
          <Header />
          <main>{children}</main>
        </>
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
