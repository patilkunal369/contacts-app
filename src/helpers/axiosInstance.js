import axios from "axios";

export default () => {
  const baseURL = process.env.REACT_APP_BASE_URL;
  const headers = {};

  if (localStorage.token) {
    headers.Authorization = `Bearer ${localStorage.token}`;
  }
  const axiosInstance = axios.create({
    baseURL: baseURL,
    headers,
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (!error.response) {
        return Promise.reject(error);
      }

      if (error.response.status === 401) {
        localStorage.removeItem("token");
        window.location = "/auth/login";
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};
