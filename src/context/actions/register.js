import axiosInstance from "../../helpers/axios";

export const register = () => {
  axiosInstance
    .post("/auth/register")
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
};
