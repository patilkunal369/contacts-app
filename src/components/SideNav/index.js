import React from "react";
import { Link, useLocation } from "react-router-dom";
import { SideNavContainer } from "./SideNav.styles";

const SideNav = () => {
  const { pathname } = useLocation();
  return (
    <SideNavContainer>
      {pathname === "/auth/login" || pathname === "/auth/register" ? null : (
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
            <Link to="/">
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
