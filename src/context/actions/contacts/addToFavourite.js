import {
  ADD_REMOVE_FAVOURITE_ERROR,
  ADD_REMOVE_FAVOURITE_LOADING,
  ADD_REMOVE_FAVOURITE_SUCCESS,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInstance";
import { toast } from "react-toastify";

export const addRemoveFavourite = (selectedContact) => (dispatch) => {
  dispatch({
    type: ADD_REMOVE_FAVOURITE_LOADING,
  });

  const { id, favourite } = selectedContact;

  toast.promise(
    axiosInstance()
      .patch(`/contacts/${id}`, {
        favourite: !favourite,
      })
      .then((res) =>
        dispatch({ type: ADD_REMOVE_FAVOURITE_SUCCESS, payload: res.data })
      )

      .catch((error) => {
        dispatch({
          type: ADD_REMOVE_FAVOURITE_ERROR,
          payload: error.status ? error.response.message : "Could not connect",
        });
      }),
    {
      pending: {
        render() {
          return !favourite
            ? "Adding to favourites"
            : "Removing from favourites";
        },
        pauseOnFocusLoss: false,
      },
      success: {
        render() {
          return !favourite ? "Added to favourites" : "Removed from favourites";
        },
        icon: false,
        pauseOnFocusLoss: false,
      },
      error: "Error",
    }
  );
};
