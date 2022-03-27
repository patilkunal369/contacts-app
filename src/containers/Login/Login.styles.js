import styled from "styled-components";

export const Container = styled.div`
  max-width: 430px;
  width: 100%;
  height: max-content;
  background: var(--White);
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: auto;
  margin-top: 5rem;

  .form {
    padding: 30px;
    background-color: var(--White);
    transition: margin-left 0.18s ease;
  }

  .form .title {
    font-size: 27px;
    font-weight: 600;
  }

  .form .input-field {
    position: relative;
    height: 50px;
    width: 100%;
    margin-top: 30px;
  }

  .input-field input {
    position: absolute;
    height: 100%;
    width: 100%;
    padding: 0 35px;
    border: none;
    outline: none;
    font-size: 16px;
    border-bottom: 2px solid #ccc;
    border-top: 2px solid transparent;
    transition: all 0.2s ease;
  }

  .input-field input:is(:focus, :valid) {
    border-bottom-color: var(--Very_dark_cyan);
  }

  .input-field i {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: var(--Dark_grayish_cyan);
    font-size: 23px;
    transition: all 0.2s ease;
  }

  .input-field input:is(:focus, :valid) ~ i {
    color: var(--Strong_cyan);
  }

  .input-field i.icon {
    left: 0;
  }
  .input-field i.showHidePw {
    right: 0;
    cursor: pointer;
    padding: 10px;
  }

  .form .checkbox-text {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
  }

  .checkbox-text .checkbox-content {
    display: flex;
    align-items: center;
  }

  .checkbox-content input {
    margin: 0 8px -2px 4px;
    accent-color: var(--Strong_cyan);
  }

  .form .text {
    color: var(--Dark_grayish_cyan_1);
    font-size: 14px;
  }

  .form a.text {
    color: var(--Strong_cyan);
    text-decoration: none;
  }
  .form a:hover {
    text-decoration: underline;
  }

  .form .button {
    margin-top: 35px;
  }

  .form .button input {
    border: none;
    color: var(--White);
    font-size: 17px;
    font-weight: 500;
    letter-spacing: 1px;
    border-radius: 6px;
    background-color: var(--Very_dark_cyan);
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .button input:hover {
    background-color: var(--Strong_cyan);
  }

  .form .login-signup {
    margin-top: 30px;
    text-align: center;
  }
`;
