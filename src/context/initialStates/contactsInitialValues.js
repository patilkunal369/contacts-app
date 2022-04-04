import { mockContactList } from "../../containers/Contacts/mockData";

export const contactsInitialValues = {
  contacts: {
    isLoading: false,
    isError: false,
    error: "",
    list: null,
    selectedContact: {},
  },
  addContacts: {
    loading: false,
    error: "",
  },
};
