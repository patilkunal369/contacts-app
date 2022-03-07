const { default: axios } = require("axios");

const baseURL = process.env.REACT_APP_BASE_URL;
const headers = {};

if (localStorage.token) {
  headers.Authorization = `Bearer ${localStorage.token}`;
}
const axiosInstance = axios.create({
  baseURL: baseURL,
  headers,
});

export default axiosInstance;
