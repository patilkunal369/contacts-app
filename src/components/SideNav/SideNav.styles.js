import styled from "styled-components";

export const SideNavContainer = styled.nav`
  background-color: #00474b;
  border-radius: 0.5rem;

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
