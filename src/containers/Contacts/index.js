import React, { useEffect } from "react";
import Contact from "../../components/Contact";
import ContactDetails from "../../components/ContactDetails";
import { useGlobalContext } from "../../context/GlobalProvider";
import axiosInstance from "../../helpers/axios";
import useHeader from "../../helpers/useHeader";
import { GridWrapper, Wrapper } from "./Contacts.styles";

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
        {console.log(localStorage.token)}
        {contactList.map((contact, i) => (
          <Contact key={i} contact={contact} />
        ))}
      </Wrapper>
      <ContactDetails />
    </GridWrapper>
  );
};

export default ContactsContainer;
