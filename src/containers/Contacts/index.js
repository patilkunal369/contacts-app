import React from "react";
import Contact from "../../components/Contact";
import ContactDetails from "../../components/ContactDetails";
import useHeader from "../../helpers/useHeader";
import {
  ButtonsWrapper, FlexWrapper, StyledButton,
  Wrapper
} from "./Contacts.styles";
import { contactList_1 } from "./mockData";

const ContactsContainer = () => {
  useHeader("All Contacts");
  return (
    <div>
      <ButtonsWrapper>
        <StyledButton name="addContact" color="primary">
          New Contact
        </StyledButton>
        <StyledButton name="deleteContact">Delete</StyledButton>
      </ButtonsWrapper>
      <FlexWrapper>
        <Wrapper>
          {contactList_1.map(({ name, email, profileImage, phone }) => (
            <Contact
              name={name}
              email={email}
              profileImage={profileImage}
              phone={phone}
            />
          ))}
        </Wrapper>
        <ContactDetails />
      </FlexWrapper>
    </div>
  );
};

export default ContactsContainer;
