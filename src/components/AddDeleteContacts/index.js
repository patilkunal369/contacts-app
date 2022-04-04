import React from "react";
import { StyledButton } from "../../common/Button/Button.styles";
import { ButtonsWrapper } from "./AddDeleteContacts.styles";

const AddDeleteContacts = () => {
  return (
    <ButtonsWrapper>
      <StyledButton name="addContact" color="primary">
        New Contact
      </StyledButton>
      <StyledButton name="deleteContact">Delete</StyledButton>
    </ButtonsWrapper>
  );
};

export default AddDeleteContacts;
