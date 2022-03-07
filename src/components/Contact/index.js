import React from "react";
import { ContactWrapper } from "./Contact.styles";

const Contact = ({ name, email, profileImage }) => {
  return (
    <ContactWrapper>
      <img src={profileImage} alt="profile" />
      <div>
        <p className="name">{name}</p>
        <p className="email">{email}</p>
      </div>
    </ContactWrapper>
  );
};

export default Contact;
