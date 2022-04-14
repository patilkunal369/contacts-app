import styled, { css } from "styled-components";

export const ContactsWrapper = styled.ul`
  gap: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  height: 100%;
  flex: 1;
  width: 100%;
  max-height: 500px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 5px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: var(--Very_dark_cyan);
  }
`;
export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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
