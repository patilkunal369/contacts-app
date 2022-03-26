import React from "react";
import { ContactWrapper } from "./Contact.styles";
import Tag from "./Tag";

const Contact = ({ name, email, profileImage, phone }) => {
  return (
    <ContactWrapper>
      <img src={profileImage} alt="profile" />
      <div>
        <p className="name">{name}</p>
        <p className="email">{email}</p>
      </div>

      <div className="vertical-divider"></div>
      <p className="phone">{phone}</p>
      <Tag />
    </ContactWrapper>
  );
};

export default Contact;
