import React from "react";
import { ErrorMessage, Field } from "formik";

const Input = ({ name, placeholder, iconName, type, ...rest }) => {
  return (
    <div className="input-field">
      <Field
        type={type}
        placeholder={placeholder}
        name={name}
        {...rest}
        autoComplete="false"
      />
      <i className={iconName}></i>
      <p className="error">
        <ErrorMessage name={name} />
      </p>
    </div>
  );
};

export default Input;
