import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { logout } from "../../context/actions/auth/logout";
import { useGlobalContext } from "../../context/GlobalProvider";
import { isPathRegisterLogin } from "../../helpers/helperMethods";
import { isAuthenticated } from "../../helpers/isAuthenticated";
import { SideNavContainer } from "./SideNav.styles";

const SideNav = () => {
  const { pathname } = useLocation();
  const history = useHistory();

  const { authDispatch } = useGlobalContext();

  return (
    <SideNavContainer>
      {!isPathRegisterLogin(pathname) && (
        <ul>
          <li>
            <Link to="/">
              <img
                src="https://img.icons8.com/color/48/000000/star--v1.png"
                alt="Favourites"
                title="Favourites"
              />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img
                src="https://img.icons8.com/color/48/000000/contacts.png"
                alt="All Contacts"
                title="All Contacts"
              />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img
                src="https://img.icons8.com/color/48/000000/hint.png"
                alt="Suggestions"
                title="Suggestions"
              />
            </Link>
          </li>
          <li>
            <Link to="#" onClick={() => logout(history)(authDispatch)}>
              <img
                src="https://img.icons8.com/color/48/000000/circled-user-male-skin-type-4--v1.png"
                alt="User"
                title="User"
              />
            </Link>
          </li>
        </ul>
      )}
    </SideNavContainer>
  );
};

export default SideNav;
