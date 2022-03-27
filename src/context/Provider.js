import React from "react";
import { GlobalProvider } from "./GlobalProvider";
import { HeaderProvider } from "./HeaderProvider";

const Provider = ({ children }) => {
  return (
    <GlobalProvider>
      <HeaderProvider>{children}</HeaderProvider>
    </GlobalProvider>
  );
};

export default Provider;
