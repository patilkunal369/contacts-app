import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import Error from "../../common/Error";
import Input from "../../common/Form/Input";
import Spinner from "../../common/Spinner";
import { Container } from "../../common/styles/form.styles";
import { register } from "../../context/actions/auth/register";
import { useGlobalContext } from "../../context/GlobalProvider";
import { useHeaderContext } from "../../context/HeaderProvider";
import usePost from "../../helpers/usePost";

const RegisterContainer = () => {
  const { setHeader } = useHeaderContext();

  const history = useHistory();

  const {
    authState: {
      auth: { isLoading, error, data, isError },
    },
    authDispatch,
  } = useGlobalContext();

  useEffect(() => {
    setHeader("Registration");
  }, []);

  const initialValues = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  useEffect(() => {
    if (data) {
      history.push("/auth/login");
    }
  }, [data]);

  const validate = ({ email, password, confirmPassword }) => {
    const errors = {};

    if (!email) {
      errors.email = "Required";
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Invalid email address";
    }

    if (!password) {
      errors.password = "Required";
    }
    // if (password.length < 8) {
    //   errors.password = "Passwords must be at least 8 charactes long";
    // }

    if (!confirmPassword) {
      errors.confirmPassword = "Required";
    }

    if (password && confirmPassword) {
      if (password !== confirmPassword) {
        errors.confirmPassword = "Passwords must match";
      }
    }

    return errors;
  };

  const handleSubmit = (values) => {
    register(values)(authDispatch);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validate={validate}
    >
      {() => {
        return (
          <Form>
            <Container>
              {isLoading && (
                <div className="loader">
                  <Spinner />
                </div>
              )}
              {isError && <Error errorMessage={error?.message} />}
              <div className={isLoading ? "form blur" : "form"}>
                <Input
                  name="userName"
                  type="text"
                  placeholder="Enter a user name"
                  iconName="uil uil-user"
                  disabled={isLoading}
                />
                <Input
                  name="email"
                  type="text"
                  placeholder="Enter your email"
                  iconName="uil uil-envelope icon"
                  disabled={isLoading}
                />
                <Input
                  name="password"
                  type="password"
                  placeholder="Create a password"
                  iconName="uil uil-lock icon"
                  disabled={isLoading}
                />
                <Input
                  name="confirmPassword"
                  type="password"
                  iconName="uil uil-lock icon"
                  placeholder="Confirm Password"
                  disabled={isLoading}
                />
                <div className="input-field button">
                  <button type="submit" disabled={isLoading}>
                    Register Now
                  </button>
                </div>
              </div>
            </Container>
          </Form>
        );
      }}
    </Formik>
  );
};

export default RegisterContainer;
