import React from "react";
import { HeaderProvider } from "./HeaderProvider";

const Provider = ({ children }) => {
  return <HeaderProvider>{children}</HeaderProvider>;
};

export default Provider;
