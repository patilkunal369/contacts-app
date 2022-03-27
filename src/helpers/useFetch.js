import { useCallback, useState } from "react";
import axiosInstance from "./axios";

const useFetch = (url, method) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState();

  const fetchData = useCallback((parameters) => {
    setIsLoading(true);
    setData({});
    setError(null);
    axiosInstance[method](url, {
      params: parameters,
    })
      .then((response) => {
        setIsLoading(false);
        setData(response.data);
      })
      .catch((error) => {
        setIsError(true);
        setError(error);
      });
  });

  return { data, isLoading, isError, error, fetchData };
};

export default useFetch;
