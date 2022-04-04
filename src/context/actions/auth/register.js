import {
  REGISTER_ERROR,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from "../../../constants/actionTypes";
import { REGISTER } from "../../../constants/API";
import axiosInstance from "../../../helpers/axiosInstance";

export const register = (values) => (authDispatch) => {
  authDispatch({
    type: REGISTER_LOADING,
  });
  const { userName: username, email, password } = values;

  axiosInstance()
    .post(REGISTER, { username, email, password })
    .then((res) =>
      setTimeout(() => {
        authDispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        });
      }, 1000)
    )
    .catch((error) =>
      authDispatch({
        type: REGISTER_ERROR,
        payload: error.response
          ? error.response.data.message
          : "Could not connect",
      })
    );
};
