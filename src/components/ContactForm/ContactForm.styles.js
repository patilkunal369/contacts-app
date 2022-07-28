import styled from "styled-components";
import { css } from "styled-components";

export const CreateContactWrapper = styled.div`
  background-color: var(--White);
  border-radius: 1rem;
  width: 100%;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  transition: 0.5s;

  animation: slideInModal 0.5s ease 1 both;

  @keyframes slideInModal {
    from {
      transform: translateY(-10rem);
      opacity: 0;
    }
    to {
      transform: translate(0);
      opacity: 1;
    }
  }
`;

const commonInput = css`
  font-size: 1rem;
  font-weight: bold;
  border: none;
  outline: none;
  padding: 1rem 1rem 1rem 0;
  border-bottom: 2px solid var(--Strong_cyan);
  border-top: 2px solid transparent;
  background-color: transparent;
`;

export const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  padding: 3rem;
  background-color: var(--Very_dark_cyan);
  border-radius: 1rem;
  width: max-content;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;

  .error {
    color: var(--Error);
  }

  input {
    ${commonInput}
    width: 100%;
    align-self: flex-end;
    color: var(--White);
    font-size: 1rem;
  }

  input::placeholder {
    color: var(--Dark_grayish_cyan);
  }

  img {
    border-radius: 5rem;
    grid-row: 1 / 3;
  }
`;

export const ButtonsWrapper = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: auto;
`;

export const ContentWrapper = styled.div`
  padding: 2rem;
  color: var(--Light_grayish_cyan_1);
  width: max-content;

  h3 {
    font-size: 1.4rem;
    font-weight: bold;
    padding: 0.3rem;
    color: var(--Very_dark_cyan);
  }

  input {
    ${commonInput}
    color: var(--Very_dark_cyan);
    width: 100%;
  }
  label {
    color: var(--White);
  }
  input::placeholder {
    color: var(--Dark_grayish_cyan_1);
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .error {
    color: var(--Error);
  }
  .closeIcon {
    color: var(--Very_dark_cyan);
  }

  .closeIcon:hover {
    color: var(--Strong_cyan);
    cursor: pointer;
  }

  .content {
    padding: 0.5rem 0 0.7rem 0.5rem;
    display: flex;
    flex-direction: column;
  }

  .job-details {
    display: flex;
    margin-top: 0.5rem;
    gap: 3rem;
    padding: 0.5rem 0 0.7rem 0.5rem;
  }

  .address {
    display: flex;
    gap: 3rem;
    padding: 0.5rem 0 0.7rem 0.5rem;
  }

  button {
    width: 100%;
    height: 3rem;
    font-size: 1.5rem;
    color: var(--White);
    border-radius: 0.5rem;
    margin-top: 1.5rem;
  }
`;
