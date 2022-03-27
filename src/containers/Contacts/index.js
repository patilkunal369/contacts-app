import React from "react";
import Contact from "../../components/Contact";
import ContactDetails from "../../components/ContactDetails";
import { useGlobalContext } from "../../context/GlobalProvider";
import useHeader from "../../helpers/useHeader";
import {
  ButtonsWrapper,
  FlexWrapper,
  GridWrapper,
  StyledButton,
  Wrapper,
} from "./Contacts.styles";

const ContactsContainer = () => {
  useHeader("All Contacts");

  const {
    contactsState: {
      contacts: { list: contactList },
    },
  } = useGlobalContext();

  return (
    <GridWrapper>
      <Wrapper>
        {contactList.map((contact, i) => (
          <Contact key={i} contact={contact} />
        ))}
      </Wrapper>
      <ContactDetails />
    </GridWrapper>
  );
};

export default ContactsContainer;
