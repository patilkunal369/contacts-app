import styled from "styled-components";
import { css } from "styled-components";

export const ContactWrapper = styled.li`
  display: grid;
  grid-template-columns: max-content max-content 2rem 1fr 1fr;
  align-items: center;
  margin-bottom: 0.5rem;

  padding: 0.5rem;
  border-radius: 1rem;
  ${(props) => {
    if (props.isSelected) {
      return css`
        border: var(--Strong_cyan) solid 1.5px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      `;
    }
    return css`
      border: var(--Light_grayish_cyan) solid 1.5px;
    `;
  }}
  background-color: var(--Light_grayish_cyan);

  &:hover {
    cursor: pointer;
    border-radius: 1rem;
  }

  img {
    background-color: var(--Strong_cyan);
    border-radius: 5rem;
    height: 2.5rem;
  }

  div {
    padding: 0.5rem;
    min-width: 20ch;
  }

  .vertical-divider {
    margin-left: auto;
    border-left: 1.5px var(--Strong_cyan) solid;
  }

  .name {
    font-size: 1rem;
    margin-bottom: 0.2rem;
    color: var(--Very_dark_cyan);
    font-weight: bold;
  }

  .email {
    font-size: 0.6rem;
    color: var(--Dark_grayish_cyan_1);
  }

  .phone {
    font-size: 1rem;
    color: var(--Dark_grayish_cyan_1);
    font-weight: bold;
  }
`;
