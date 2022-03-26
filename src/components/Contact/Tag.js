import React from "react";
import styled from "styled-components";

const TagWrapper = styled.p`
  background-color: #afd5c7;
  font-size: 0.5rem;
  padding: 0.4rem;
  color: var(--White);
  border-radius: 1rem;
  margin-left: auto;
  margin-right: 1rem;
`;

const Tag = () => {
  return <TagWrapper>Work</TagWrapper>;
};

export default Tag;
