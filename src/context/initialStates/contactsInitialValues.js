import { mockContactList } from "../../containers/Contacts/mockData";

export const contactsInitialValues = {
  contacts: {
    loading: false,
    error: false,
    list: mockContactList,
  },
  addContacts: {
    loading: false,
    error: false,
  },
};
