import React, { useEffect } from "react";
import { register } from "../../context/actions/register";

const RegisterContainer = () => {
  useEffect(() => {
    register();
  }, []);
  return <div>RegisterContainer</div>;
};

export default RegisterContainer;
