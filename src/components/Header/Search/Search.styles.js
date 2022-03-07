import styled from "styled-components";

export const StyledInput = styled.input`
  border-radius: 1rem;
  padding: 0.5rem;
  border: 1.5px solid var(--White);
  outline: none;
  color: var(--Dark_grayish_cyan_1);
  background-color: var(--Light_grayish_cyan);
  margin-left: 1rem;
  font-size: 1rem;

  &:hover {
    border: 1.5px solid var(--Strong_cyan);
    cursor: pointer;
  }
  &:focus {
    border: 1.5px solid var(--Strong_cyan);
  }
`;
