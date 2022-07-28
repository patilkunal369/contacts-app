import { mockContactList } from "../../containers/Contacts/mockData";

export const contactsInitialValues = {
  contacts: {
    isLoading: false,
    isError: false,
    error: "",
    list: null,
    selectedContact: mockContactList[0],
  },
  createContacts: {
    isLoading: false,
    isError: false,
    error: "",
    isCreateContactModalOpen: false,
  },
  editContacts: {
    isLoading: false,
    isError: false,
    error: "",
    isEditContactModalOpen: false,
  },
  deleteContacts: {
    isLoading: false,
    isError: false,
    error: "",
  },
  searchContacts: {
    isSearching: false,
    searchResults: [],
  },
};
