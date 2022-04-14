import { toast } from "react-toastify";
import {
  CLOSE_CREATE_CONTACTS_MODAL,
  CREATE_CONTACTS_ERROR,
  CREATE_CONTACTS_LOADING,
  CREATE_CONTACTS_SUCCESS,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInstance";

export const createContact =
  (id, name, email, phone, address, company, title, profileImage) =>
  (dispatch) => {
    dispatch({
      type: CREATE_CONTACTS_LOADING,
    });
    dispatch({
      type: CLOSE_CREATE_CONTACTS_MODAL,
    });
    toast.promise(
      axiosInstance()
        .post("/contacts", {
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
            type: CREATE_CONTACTS_SUCCESS,
            payload: res.data,
          })
        )
        .catch((error) =>
          dispatch({
            type: CREATE_CONTACTS_ERROR,
            payload: error.status
              ? error.response.message
              : "Could not connect",
          })
        ),
      {
        pending: "Creating a contact",
        success: "Contact added",
        error: "Error",
      }
    );
  };
