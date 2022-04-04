import styled from "styled-components";
import { css } from "styled-components";


export const StyledButton = styled.button`
  padding: 0.4rem 0.6rem;
  border-radius: 0.3rem;
  font-size: 0.8rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

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
