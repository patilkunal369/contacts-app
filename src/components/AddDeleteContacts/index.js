import React from "react";
import {
  ButtonsWrapper,
  StyledButton,
} from "../../containers/Contacts/Contacts.styles";

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
