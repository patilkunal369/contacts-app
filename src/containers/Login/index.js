import { Form, Formik } from "formik";
import React, { useEffect } from "react";

import Input from "../../common/Form/Input";
import { Container } from "../../common/styles/form.styles";
import { login } from "../../context/actions/auth/login";
import { useGlobalContext } from "../../context/GlobalProvider";
import { useHeaderContext } from "../../context/HeaderProvider";
import Error from "../../common/Error";
import Spinner from "../../common/Spinner";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom";

const LoginContainer = () => {
  const { setHeader } = useHeaderContext();
  const history = useHistory();
  const {
    authDispatch,
    authState: {
      auth: { isLoading, isError, error, data },
    },
  } = useGlobalContext();

  useEffect(() => {
    setHeader("Login");
  }, []);

  const initialValues = {
    email: "",
    password: "",
  };

  useEffect(() => {
    if (data) {
      history.push("/");
    }
  }, [data]);

  const validate = ({ email, password }) => {
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

    return errors;
  };

  const handleSubmit = (values) => {
    login(values)(authDispatch);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validate={validate}
    >
      <Container>
        {isLoading && (
          <div className="loader">
            <Spinner />
          </div>
        )}
        {isError && <Error errorMessage={error} />}
        <div className={isLoading ? "form blur" : "form"}>
          <Form>
            <Input
              type="text"
              name="email"
              placeholder="Enter your email"
              iconName="uil uil-envelope icon"
            />
            <Input
              type="password"
              name="password"
              placeholder="Enter your password"
              iconName="uil uil-lock icon"
            />

            <div className="input-field button">
              <button type="submit">Login Now</button>
            </div>
          </Form>

          <div className="login-signup">
            <span className="text">
              Not a member?
              <Link to="#" className="text signup-a">
                Signup now
              </Link>
            </span>
          </div>
        </div>
      </Container>
    </Formik>
  );
};

export default LoginContainer;
