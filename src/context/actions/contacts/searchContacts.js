import { SEARCH_CONTACT } from "../../../constants/actionTypes";

export const searchContacts = (searchTerm) => (dispatch) => {
  dispatch({
    type: SEARCH_CONTACT,
    payload: searchTerm,
  });
};
