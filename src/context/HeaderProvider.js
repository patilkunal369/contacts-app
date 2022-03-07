import React, { useContext, useState } from "react";
import { createContext } from "react";

export const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const [header, setHeader] = useState("");
  return (
    <HeaderContext.Provider value={{ header, setHeader }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeaderContext = () => {
  return useContext(HeaderContext);
};
