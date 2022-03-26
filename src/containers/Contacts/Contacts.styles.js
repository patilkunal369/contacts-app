import styled, { css } from "styled-components";

export const ButtonsWrapper = styled.div`
  padding: 0.5rem;
  display: flex;
  gap: 0.5rem;
`;

export const StyledButton = styled.button`
  padding: 0.4rem 0.6rem;
  border-radius: 0.3rem;
  font-size: 0.8rem;

  ${(props) => {
    switch (props.color) {
      case "primary":
        return css`
          background-color: var(--Very_dark_cyan);
          border: none;
          color: hsl(0, 0%, 90%);
        `;
      default:
        return css`
          background-color: var(--White);
          outline: none;
          border: var(--Very_dark_cyan) 1.5px solid;
        `;
    }
  }}

  &:hover {
    background-color: var(--Strong_cyan);
    cursor: pointer;
    color: var(--Very_dark_cyan);
  }
`;

export const Wrapper = styled.ul`
  gap: 1rem;
  padding: 0.5rem;
  border-radius: 1rem;
  height: 100%;
  flex: 1;
  width: 100%;
`;
export const FlexWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 0.4fr;
  gap: 1rem;
  height: 100%;
`;
