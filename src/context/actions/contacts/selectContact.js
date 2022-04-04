import { SELECT_CONTACT } from "../../../constants/actionTypes";

export const selectContact = (contact) => (dispatch) => {
  dispatch({
    type: SELECT_CONTACT,
    payload: contact,
  });
};
