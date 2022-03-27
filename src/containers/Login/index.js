import React from "react";
import { a } from "react-router-dom";
import { Container } from "./Login.styles";

const LoginContainer = () => {
  return (
    <Container>
      <div className="form login">
        <span className="title">Login</span>

        <form action="#">
          <div className="input-field">
            <input type="text" placeholder="Enter your email" required />
            <i className="uil uil-envelope icon"></i>
          </div>
          <div className="input-field">
            <input
              type="password"
              className="password"
              placeholder="Enter your password"
              required
            />
            <i className="uil uil-lock icon"></i>
          </div>

          <div className="input-field button">
            <input type="button" value="Login Now" />
          </div>
        </form>

        <div className="login-signup">
          <span className="text">
            Not a member?
            <a href="#" className="text signup-a">
              Signup now
            </a>
          </span>
        </div>
      </div>
    </Container>
  );
};

export default LoginContainer;
