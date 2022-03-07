import React from "react";
import { useHeaderContext } from "../../context/HeaderProvider";
import { HeaderWrapper } from "./Header.styles";
import Search from "./Search";
const Header = () => {
  const { header } = useHeaderContext();
  return (
    <HeaderWrapper>
      {header}
      <Search />
    </HeaderWrapper>
  );
};

export default Header;
