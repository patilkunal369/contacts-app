import {
  CONTACTS_ERROR,
  CONTACTS_LOADING,
  CONTACTS_SUCCESS,
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
          selectedContact: payload[0]
        },
      };
    case CONTACTS_ERROR:
      return {
        ...state,
        contacts: {
          ...state.contacts,
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
    default:
      return state;
  }
};

export default contacts;
