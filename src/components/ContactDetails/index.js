import React from "react";
import Button from "../../common/Button";
import { useGlobalContext } from "../../context/GlobalProvider";
import {
  ButtonsWrapper,
  ContentWrapper,
  DetailsHeader,
  DetailsWrapper,
} from "./ContactsDetails.styles";

const ContactDetails = () => {
  const {
    contactsState: {
      contacts: { selectedContact },
    },
  } = useGlobalContext();

  const { id, name, email, phone, address, company, profileImage } =
    selectedContact;

  return (
    <DetailsWrapper>
      <div className="header-wrapper">
        <DetailsHeader>
          <img src={profileImage} alt="profileImage" />
          <p className="name">{name}</p>
          <ButtonsWrapper>
            <Button value="Add to Favourite" color="primary" />
            <Button value="Edit" color="primary" />
            <Button value="Delete" />
          </ButtonsWrapper>
        </DetailsHeader>
      </div>
      <ContentWrapper>
        <h3>Contact Information</h3>

        <div className="content">
          <label>Email</label>
          <p>{email}</p>
        </div>

        <div className="content">
          <label>Mobile</label>
          <p>{phone}</p>
        </div>

        <div className="content">
          <label>Address</label>
          <p>
            {address.suite} {address.street}
          </p>
          <p>
            {address.city} {address.zipcode}
          </p>
        </div>
        <div className="job-details">
          <div className="content">
            <label>Company</label>
            <p>{company.name}</p>
          </div>

          <div className="content">
            <label>Job Title</label>
            <p>Manager</p>
          </div>
        </div>
      </ContentWrapper>
    </DetailsWrapper>
  );
};

export default ContactDetails;
