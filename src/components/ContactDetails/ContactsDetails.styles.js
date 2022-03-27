import styled from "styled-components";
export const DetailsWrapper = styled.div`
  background-color: var(--Very_dark_cyan);
  border-radius: 1rem;
  height: 90%;
  position: relative;

  .header-wrapper {
    max-width: 100%;
    height: 20%;
    background-color: var(--Light_grayish_cyan_1);
    border-radius: 1rem 1rem 0 0;
  }
`;

export const DetailsHeader = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr 1fr;
  position: absolute;
  background-color: transparent;
  top: 5%;
  left: 1rem;
  width: 100%;

  img {
    max-width: 8rem;
    flex-grow: 0;
    border-radius: 5rem;
    grid-row: 1 / 3;
  }

  .name {
    color: var(--Very_dark_cyan);
    font-size: 2rem;
    font-weight: bold;
    margin: 2rem 0 0 1rem;
  }
`;

export const ButtonsWrapper = styled.div`
  margin: 1.5rem 0 0 1rem;
  button {
    padding: 0.2rem 0.3rem;
    border-radius: 0.3rem;
    font-size: 0.8rem;
    margin-right: 0.5rem;
    background-color: var(--Light_grayish_cyan);
    border: none;
    color: var(--Very_dark_cyan);

    &:hover {
      background-color: var(--Strong_cyan);
      cursor: pointer;
      color: var(--White);
    }
  }
`;

export const ContentWrapper = styled.div`
  margin-top: 3rem;
  padding: 2rem;
  color: var(--Light_grayish_cyan_1);

  h3 {
    font-size: 1.4rem;
    font-weight: bold;
    padding: 0.3rem;
  }

  p {
    color: var(--Light_grayish_cyan);
    font-size: 1.1rem;
    font-weight: bold;
  }

  .content {
    padding: 0.5rem 0 0.7rem 0.5rem;
  }

  .job-details {
    display: flex;
    border-top: 2px solid var(--Strong_cyan);
    padding: 0.5rem;
    margin-top: 0.5rem;
    gap: 6rem;
  }
`;
