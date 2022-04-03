import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axios";

export const login =
  ({ email, password }) =>
  (authDispatch) => {
    authDispatch({
      type: LOGIN_LOADING,
    });
    axiosInstance
      .post("/auth/login", {
        email,
        password,
      })
      .then((res) => {
        setTimeout(() => {
          authDispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
          });
          localStorage.setItem("token", res.data.access_token);
        }, 1000);
      })
      .catch((error) => {
        setTimeout(() => {
          authDispatch({
            type: LOGIN_ERROR,
            payload: error.response
              ? error.response.data.message
              : "Could not connect",
          });
        }, 1000);
      });
  };
