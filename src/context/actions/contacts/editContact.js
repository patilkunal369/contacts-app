import { toast } from "react-toastify";
import {
  CLOSE_EDIT_CONTACTS_MODAL,
  EDIT_CONTACT_ERROR,
  EDIT_CONTACT_LOADING,
  EDIT_CONTACT_SUCCESS,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInstance";

export const editContact =
  (id, name, email, phone, address, company, title, profileImage) =>
  (dispatch) => {
    dispatch({
      type: EDIT_CONTACT_LOADING,
    });
    dispatch({
      type: CLOSE_EDIT_CONTACTS_MODAL,
    });
    toast.promise(
      axiosInstance()
        .patch(`/contacts/${id}`, {
          name,
          email,
          phone,
          address,
          company,
          title,
          profileImage,
        })
        .then((res) =>
          dispatch({
            type: EDIT_CONTACT_SUCCESS,
            payload: res.data,
          })
        )
        .catch((error) =>
          dispatch({
            type: EDIT_CONTACT_ERROR,
            payload: error.status
              ? error.response.message
              : "Could not connect",
          })
        ),
      {
        pending: "Editing a contact",
        success: "Contact edited",
        error: "Error",
      }
    );
  };
