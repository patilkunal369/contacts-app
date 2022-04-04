import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  REGISTER_ERROR,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  USER_LOGOUT,
} from "../../constants/actionTypes";
import { authInitialValues } from "../initialStates/authInitialValues";

const auth = (state, { type, payload }) => {
  switch (type) {
    case REGISTER_LOADING:
    case LOGIN_LOADING:
      return {
        ...state,
        auth: {
          ...state.auth,
          isLoading: true,
          isError: false,
        },
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        auth: {
          ...state.auth,
          isLoading: false,
          data: payload,
        },
      };
    case REGISTER_ERROR:
    case LOGIN_ERROR:
      return {
        ...state,
        auth: {
          ...state.auth,
          isLoading: false,
          isError: true,
          error: payload,
        },
      };
    case USER_LOGOUT:
      return {
        ...state,
        auth: authInitialValues,
      };

    default:
      return state;
  }
};

export default auth;
