import { useEffect } from "react";
import { useHeaderContext } from "../context/HeaderProvider";

const useHeader = (header) => {
  const { setHeader } = useHeaderContext();
  useEffect(() => {
    setHeader(header);
  }, []);
};

export default useHeader;
