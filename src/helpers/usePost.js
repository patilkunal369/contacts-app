import { useCallback, useState } from "react";
import axiosInstance from "./axios";

const usePost = (url) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState();

  const postData = useCallback((parameters) => {
    setIsLoading(true);
    setData({});
    setError(null);
    axiosInstance
      .post(url, parameters)
      .then((response) => {
        setIsLoading(false);
        setData(response.data);
      })
      .catch((error) => {
        setIsError(true);
        setError(error);
      });
  });

  return { data, isLoading, isError, error, postData };
};

export default usePost;
