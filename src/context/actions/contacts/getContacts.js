import {
  CONTACTS_ERROR,
  CONTACTS_LOADING,
  CONTACTS_SUCCESS,
} from "../../../constants/actionTypes";
import { CONTACTS } from "../../../constants/API";
import axiosInstance from "../../../helpers/axiosInstance";

export const getContacts = () => (dispatch) => {
  dispatch({
    type: CONTACTS_LOADING,
  });
  axiosInstance()
    .get(CONTACTS)
    .then((res) =>
      dispatch({
        type: CONTACTS_SUCCESS,
        payload: res.data,
      })
    )
    .catch((error) =>
      dispatch({
        type: CONTACTS_ERROR,
        payload: error.status ? error.response.message : "Could not connect",
      })
    );
};
