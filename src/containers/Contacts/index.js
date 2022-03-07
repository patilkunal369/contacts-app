import React from "react";
import Contact from "../../components/Contact";
import useHeader from "../../helpers/useHeader";
import {ButtonsWrapper, DetailsWrapper, GridWrapper, StyledButton, Wrapper, FlexWrapper} from './Contacts.styles';
import { contactList, contactList_1, contactList_2 } from "./mockData";

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
          {/* <div>
            <label>Name</label>
            <label>E-mail</label>
          </div> */}
          <ul>
            {contactList_1.map(({ name, email, profileImage }) => (
              <Contact name={name} email={email} profileImage={profileImage} />
            ))}
          </ul>
        </Wrapper>
        <DetailsWrapper>DetailsWrapper</DetailsWrapper>
      </FlexWrapper>
    </div>
  );
};

export default ContactsContainer;
