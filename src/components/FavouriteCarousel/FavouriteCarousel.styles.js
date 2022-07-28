import styled from "styled-components";

export const CarouselWrapper = styled.div`
  margin: 0rem 1rem;
  display: flex;
  gap: 2rem;
  max-height: 6rem;

  overflow: hidden;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: var(--Very_dark_cyan);
  }

  & div:nth-child(2) {
    animation-delay: 0.15s;
  }
  & div:nth-child(3) {
    animation-delay: 0.3s;
  }
  & div:nth-child(4) {
    animation-delay: 0.45s;
  }
  & div:nth-child(5) {
    animation-delay: 0.6s;
  }
  & div:nth-child(6) {
    animation-delay: 0.75s;
  }
  & div:nth-child(7) {
    animation-delay: 0.9s;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;

    transition: 0.5s;

    animation: slideInContact 0.5s ease 1 both;
  }

  div:hover {
    cursor: pointer;
  }

  img {
    border-radius: 5rem;
    max-width: 4rem;
  }

  p {
    margin-top: 0.3rem;
    width: 10ch;
    max-width: 20ch;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 0.9rem;
  }
`;
