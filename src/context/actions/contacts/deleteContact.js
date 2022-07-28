import { toast } from "react-toastify";
import {
  DELETE_CONTACT_SUCCESS,
  CREATE_CONTACTS_ERROR,
  DELETE_CONTACT_LOADING,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInstance";

export const deleteContact = (id) => (dispatch) => {
  dispatch({
    type: DELETE_CONTACT_LOADING,
  });

  toast.promise(
    axiosInstance()
      .delete(`/contacts/${id}`)
      .then((res) => dispatch({ type: DELETE_CONTACT_SUCCESS, payload: id }))
      .catch((error) =>
        dispatch({
          type: CREATE_CONTACTS_ERROR,
          payload: error.status ? error.response.message : "Could not connect",
        })
      ),
    {
      pending: "Deleting Contact",
      success: "Contact Deleted",
      error: "Error",
    }
  );
};
