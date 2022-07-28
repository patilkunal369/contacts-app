import styled, { css } from "styled-components";

export const ContactsWrapper = styled.ul`
  gap: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  height: 100%;
  flex: 1;
  width: 100%;
  max-height: 400px;
  min-width: 500px;
  overflow: auto;

  & li:nth-child(2) {
    animation-delay: 0.15s;
  }
  & li:nth-child(3) {
    animation-delay: 0.3s;
  }
  & li:nth-child(4) {
    animation-delay: 0.45s;
  }
  & li:nth-child(5) {
    animation-delay: 0.6s;
  }
  & li:nth-child(6) {
    animation-delay: 0.75s;
  }
  & li:nth-child(7) {
    animation-delay: 0.9s;
  }

  &::-webkit-scrollbar {
    width: 5px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: var(--Very_dark_cyan);
  }
`;
export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content 1fr;
  gap: 1rem;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;
