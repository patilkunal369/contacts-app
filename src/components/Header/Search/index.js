import React from "react";
import { StyledInput } from "./Search.styles";
import { isPathRegisterLogin } from "../../../helpers/helperMethods";
import { useLocation } from "react-router-dom";
import { isAuthenticated } from "../../../helpers/isAuthenticated";

const Search = () => {
  const { pathname } = useLocation();
  return (
    <>
      {!isPathRegisterLogin(pathname) && <StyledInput placeholder="Search" />}
    </>
  );
};

export default Search;
