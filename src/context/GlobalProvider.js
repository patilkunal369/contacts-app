import { createContext, useContext, useReducer, useState } from "react";
import { authInitialValues } from "./initialStates/authInitialValues";
import { contactsInitialValues } from "./initialStates/contactsInitialValues";
import auth from "./reducers/auth";
import contacts from "./reducers/contacts";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [contactsState, contactDispatch] = useReducer(
    contacts,
    contactsInitialValues
  );

  const [authState, authDispatch] = useReducer(auth, authInitialValues);

  return (
    <GlobalContext.Provider
      value={{
        contactsState,
        contactDispatch,
        authState,
        authDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
