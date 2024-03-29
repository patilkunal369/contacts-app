import styled from "styled-components";
export const DetailsWrapper = styled.div`
  background-color: var(--Very_dark_cyan);
  border-radius: 1rem;
  width: 100%;
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 2;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  animation: slideInDetails 0.5s ease 1 both;

  transition: 0.5s;

  @keyframes slideInDetails {
    from {
      transform: translateX(10rem);
      opacity: 0;
    }

    to {
      transform: translate(0);
      opacity: 1;
    }
  }

  .header-wrapper {
    max-width: 100%;
    padding: 0.5rem;
    background-color: var(--Light_grayish_cyan_1);
    border-radius: 1rem 1rem 0 0;
  }
`;

export const DetailsHeader = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr 1fr;
  background-color: transparent;
  align-items: center;

  width: 100%;

  img {
    max-width: 8rem;
    border-radius: 5rem;
    grid-row: 1 / 3;
  }

  .name {
    color: var(--Very_dark_cyan);
    font-size: 2rem;
    font-weight: bold;
    align-self: flex-end;
    padding-left: 0.5rem;
    width: 20ch;
  }
`;

export const ButtonsWrapper = styled.div`
  padding: 0.5rem;
  display: flex;
  gap: 0.5rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
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

    margin-top: 0.5rem;
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
