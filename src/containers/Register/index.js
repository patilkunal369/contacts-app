import React from "react";
import { Container } from "../Login/Login.styles";

const RegisterContainer = () => {
  return (
    <Container>
      <div class="form signup">
        <span class="title">Registration</span>

        <form>
          <div class="input-field">
            <input type="text" placeholder="Enter your name" required />
            <i class="uil uil-user"></i>
          </div>
          <div class="input-field">
            <input type="text" placeholder="Enter your email" required />
            <i class="uil uil-envelope icon"></i>
          </div>
          <div class="input-field">
            <input
              type="password"
              class="password"
              placeholder="Create a password"
              required
            />
            <i class="uil uil-lock icon"></i>
          </div>
          <div class="input-field">
            <input
              type="password"
              class="password"
              placeholder="Confirm a password"
              required
            />
            <i class="uil uil-lock icon"></i>
            <i class="uil uil-eye-slash showHidePw"></i>
          </div>
          <div className="input-field button">
            <input type="button" value="Register Now" />
          </div>
        </form>
      </div>
    </Container>
  );
};

export default RegisterContainer;
