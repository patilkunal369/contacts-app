import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from "../../../constants/actionTypes";
import { LOGIN } from "../../../constants/API";
import axiosInstance from "../../../helpers/axiosInstance";

export const login =
  ({ email, password }) =>
  (authDispatch) => {
    authDispatch({
      type: LOGIN_LOADING,
    });
    axiosInstance()
      .post(LOGIN, {
        email,
        password,
      })
      .then((res) => {
        authDispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
        localStorage.setItem("token", res.data.access_token);
      })
      .catch((error) => {
        authDispatch({
          type: LOGIN_ERROR,
          payload: error.response
            ? error.response.data.message
            : "Could not connect",
        });
      });
  };
