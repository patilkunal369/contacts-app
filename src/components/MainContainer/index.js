import React from "react";
import { useLocation } from "react-router-dom";
import { isPathRegisterLogin } from "../../helpers/helperMethods";
import AddDeleteContacts from "../AddDeleteContacts";
import CreateContact from "../CreateContact";
import EditContact from "../EditContact";
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
          <CreateContact />
          <EditContact />
          <main style={{ minHeight: "500px" }}>{children}</main>
        </>
      )}
    </>
  );
};

export default MainContainer;
