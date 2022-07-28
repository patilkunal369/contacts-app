import {
  ADD_REMOVE_FAVOURITE_ERROR,
  ADD_REMOVE_FAVOURITE_LOADING,
  ADD_REMOVE_FAVOURITE_SUCCESS,
  CLOSE_CREATE_CONTACTS_MODAL,
  CLOSE_EDIT_CONTACTS_MODAL,
  CONTACTS_ERROR,
  CONTACTS_LOADING,
  CONTACTS_SUCCESS,
  CREATE_CONTACTS_ERROR,
  CREATE_CONTACTS_LOADING,
  CREATE_CONTACTS_SUCCESS,
  DELETE_CONTACT_ERROR,
  DELETE_CONTACT_LOADING,
  DELETE_CONTACT_SUCCESS,
  EDIT_CONTACT_ERROR,
  EDIT_CONTACT_LOADING,
  EDIT_CONTACT_SUCCESS,
  OPEN_CREATE_CONTACTS_MODAL,
  OPEN_EDIT_CONTACTS_MODAL,
  SEARCH_CONTACT,
  SELECT_CONTACT,
} from "../../constants/actionTypes/index";
const contacts = (state, { type, payload }) => {
  switch (type) {
    case CONTACTS_LOADING:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          isLoading: true,
          isError: false,
        },
      };
    case CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          isLoading: false,
          isError: false,
          list: payload,
          selectedContact: payload[0],
        },
      };
    case CONTACTS_ERROR:
    case ADD_REMOVE_FAVOURITE_ERROR:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          isLoading: false,
          isError: true,
          error: payload,
        },
      };

    case CREATE_CONTACTS_LOADING:
      return {
        ...state,
        createContacts: {
          ...state.createContacts,
          isLoading: true,
          isError: false,
        },
      };
    case CREATE_CONTACTS_SUCCESS:
      return {
        ...state,
        createContacts: {
          ...state.createContacts,
          isLoading: false,
          isError: false,
        },
        contacts: {
          ...state.contacts,
          list: [...state.contacts.list, payload],
        },
      };
    case CREATE_CONTACTS_ERROR:
      return {
        ...state,
        createContacts: {
          ...state.createContacts,
          isLoading: false,
          isError: true,
          error: payload,
        },
      };

    case SELECT_CONTACT:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          selectedContact: payload,
        },
      };

    case ADD_REMOVE_FAVOURITE_SUCCESS:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          isLoading: false,
          isError: false,
          list: state.contacts.list.map((contact) => {
            if (contact.id === payload.id) {
              return payload;
            }
            return contact;
          }),

          selectedContact:
            state.contacts.selectedContact.id === payload.id
              ? payload
              : state.contacts.selectedContact,
        },
      };

    case ADD_REMOVE_FAVOURITE_LOADING:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          isError: false,
        },
      };

    case OPEN_CREATE_CONTACTS_MODAL:
      return {
        ...state,
        createContacts: {
          ...state.createContacts,
          isCreateContactModalOpen: true,
        },
      };

    case CLOSE_CREATE_CONTACTS_MODAL:
      return {
        ...state,
        createContacts: {
          ...state.createContacts,
          isCreateContactModalOpen: false,
        },
      };
    case OPEN_EDIT_CONTACTS_MODAL:
      return {
        ...state,
        editContacts: {
          ...state.editContacts,
          isEditContactModalOpen: true,
        },
      };

    case CLOSE_EDIT_CONTACTS_MODAL:
      return {
        ...state,
        editContacts: {
          ...state.editContacts,
          isEditContactModalOpen: false,
        },
      };

    case EDIT_CONTACT_LOADING:
      return {
        ...state,
        editContacts: {
          ...state.editContacts,
          isLoading: true,
          isError: false,
        },
      };
    case EDIT_CONTACT_SUCCESS:
      return {
        ...state,
        editContacts: {
          ...state.editContacts,
          isLoading: false,
          isError: false,
        },
        contacts: {
          ...state.contacts,
          list: state.contacts.list.map((contact) => {
            if (contact.id === payload.id) {
              return payload;
            }
            return contact;
          }),
          selectedContact:
            state.contacts.selectedContact.id === payload.id
              ? payload
              : state.contacts.selectedContact,
        },
      };
    case EDIT_CONTACT_ERROR:
      return {
        ...state,
        editContacts: {
          ...state.editContacts,
          isLoading: false,
          isError: true,
          error: payload,
        },
      };
    case DELETE_CONTACT_LOADING:
      return {
        ...state,
        deleteContacts: {
          ...state.deleteContacts,
          isLoading: true,
          isError: false,
        },
      };
    case DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        deleteContacts: {
          ...state.deleteContacts,
          isLoading: false,
          isError: false,
        },
        contacts: {
          ...state.contacts,
          list: state.contacts.list.filter((item) => item.id !== payload),
          selectedContact:
            state.contacts.list[0].id === payload
              ? state.contacts.list[1]
              : state.contacts.list[0],
        },
      };
    case DELETE_CONTACT_ERROR:
      return {
        ...state,
        deleteContacts: {
          ...state.deleteContacts,
          isLoading: false,
          isError: true,
          error: payload,
        },
      };

    case SEARCH_CONTACT:
      return {
        ...state,
        searchContacts: {
          isSearching: payload.length > 0 || false,
          searchResults: state.contacts.list.filter(
            (contact) =>
              contact.name?.toLowerCase().search(payload?.toLowerCase()) !== -1
          ),
        },
      };
    default:
      return state;
  }
};

export default contacts;
