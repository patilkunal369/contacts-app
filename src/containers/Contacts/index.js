import React, { useEffect } from "react";
import Error from "../../common/Error";
import Spinner from "../../common/Spinner";
import Contact from "../../components/Contact";
import ContactDetails from "../../components/ContactDetails";
import { getContacts } from "../../context/actions/contacts/getContacts";
import { selectContact } from "../../context/actions/contacts/selectContact";
import { useGlobalContext } from "../../context/GlobalProvider";
import useHeader from "../../helpers/useHeader";
import { GridWrapper, ContactsWrapper, Wrapper } from "./Contacts.styles";

const ContactsContainer = () => {
  useHeader("All Contacts");

  const {
    contactDispatch,
    contactsState: {
      contacts: {
        list: contactList,
        isLoading,
        isError,
        error,
        selectedContact,
      },
    },
  } = useGlobalContext();

  useEffect(() => {
    getContacts()(contactDispatch);
  }, []);

  const handleClick = (contact) => {
    selectContact(contact)(contactDispatch);
  };
  return (
    <>
      {isLoading && (
        <Wrapper>
          <Spinner />
        </Wrapper>
      )}

      {isError && <Error errorMessage={error} />}
      {contactList && (
        <GridWrapper>
          <ContactsWrapper>
            {contactList.map((contact, i) => (
              <Contact key={i} contact={contact} onClick={handleClick} />
            ))}
          </ContactsWrapper>
          <ContactDetails />
        </GridWrapper>
      )}
    </>
  );
};

export default ContactsContainer;
