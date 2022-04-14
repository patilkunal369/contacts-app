import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: min-content max-content 1fr;
  gap: 1rem;
  /* height: 100%; */
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 1rem;
  width: 100%;
`;

export const Main = styled.div`
  min-height: 100vh;
  padding: 1rem;
  background-color: var(--Light_grayish_cyan_1);
  display: flex;
  align-items: center;
  justify-content: center;
`;
