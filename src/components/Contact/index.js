import React from "react";
import { ContactWrapper } from "./Contact.styles";
import Tag from "./Tag";
import { useGlobalContext } from "../../context/GlobalProvider";

const Contact = ({ contact, onClick }) => {
  const { name, email, profileImage, phone } = contact;

  const {
    contactsState: {
      contacts: { selectedContact },
    },
  } = useGlobalContext();

  const { id } = selectedContact;

  return (
    <ContactWrapper
      onClick={() => onClick(contact)}
      isSelected={id === contact.id}
    >
      <img src={profileImage} alt="profile" />
      <div>
        <p className="name">{name}</p>
        <p className="email">{email}</p>
      </div>

      <div className="vertical-divider"></div>
      <p className="phone">{phone}</p>
      <Tag />
      {/* <input type="checkbox" /> */}
    </ContactWrapper>
  );
};

export default Contact;
