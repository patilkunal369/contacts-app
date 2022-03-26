import styled from "styled-components";

export const ContactWrapper = styled.li`
  display: grid;
  grid-template-columns: max-content max-content 2rem 1fr 1fr;
  align-items: center;
  background-color: var(--Light_grayish_cyan);
  margin-bottom: 0.5rem;
  border: var(--Light_grayish_cyan) solid 1.5px;
  padding: 0.5rem;
  border-radius: 1rem;

  &:hover {
    border: var(--Strong_cyan) solid 1.5px;
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
