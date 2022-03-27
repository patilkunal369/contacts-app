import { createContext, useContext, useReducer, useState } from "react";
import contacts from "./reducers/contacts";
import contactsInitialValues from "./initialStates/contactsInitialValues";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [contactsState, contactDispatch] = useReducer(
    contacts,
    contactsInitialValues
  );
  return (
    <GlobalContext.Provider value={{ contactsState, contactDispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
