import React, { useEffect, useState } from "react";
import Error from "../../common/Error";
import Spinner from "../../common/Spinner";
import Contact from "../../components/Contact";
import ContactDetails from "../../components/ContactDetails";
import FavouriteCarousel from "../../components/FavouriteCarousel";
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
      searchContacts: { isSearching, searchResults },
    },
  } = useGlobalContext();

  useEffect(() => {
    getContacts()(contactDispatch);
  }, []);

  const handleClick = (contact) => {
    selectContact(contact)(contactDispatch);
  };

  const renderedContactsList = isSearching ? searchResults : contactList;

  return (
    <>
      {isLoading && (
        <Wrapper>
          <Spinner />
        </Wrapper>
      )}

      {isError && <Error errorMessage={error} />}
      {renderedContactsList && (
        <GridWrapper>
          <FavouriteCarousel
            favourites={renderedContactsList.filter(
              (contact) => contact.favourite
            )}
          />
          <ContactDetails />
          <ContactsWrapper>
            {renderedContactsList.map((contact, i) => (
              <Contact key={i} contact={contact} onClick={handleClick} />
            ))}
          </ContactsWrapper>
        </GridWrapper>
      )}
    </>
  );
};

export default ContactsContainer;
