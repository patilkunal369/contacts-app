import styled from "styled-components";

export const SideNavContainer = styled.nav`
  background-color: var(--Very_dark_cyan);
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  grid-row: 1 / 4;

  ul {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  ul li {
    padding: 0.5rem;
    img {
      width: 2rem;
    }
  }

  li:last-child {
    margin-top: auto;
  }
`;
