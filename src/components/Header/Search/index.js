import React from "react";
import { StyledInput } from "./Search.styles";
import { isPathRegisterLogin } from "../../../helpers/helperMethods";
import { useLocation } from "react-router-dom";
import { isAuthenticated } from "../../../helpers/isAuthenticated";
import { searchContacts } from "../../../context/actions/contacts/searchContacts";
import { useGlobalContext } from "../../../context/GlobalProvider";

const Search = () => {
  const { pathname } = useLocation();

  const { contactDispatch } = useGlobalContext();
  return (
    <>
      {!isPathRegisterLogin(pathname) && (
        <StyledInput
          placeholder="Search"
          onChange={(e) => {
            searchContacts(e.target.value)(contactDispatch);
          }}
        />
      )}
    </>
  );
};

export default Search;
