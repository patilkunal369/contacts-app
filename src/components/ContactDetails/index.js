import React from "react";
import Button from "../../common/Button";
import { OPEN_EDIT_CONTACTS_MODAL } from "../../constants/actionTypes";
import { addRemoveFavourite } from "../../context/actions/contacts/addToFavourite";
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
    contactDispatch,
    setIsEditContactModalOpen,
  } = useGlobalContext();

  const { id, name, email, phone, address, company, profileImage, favourite } =
    selectedContact;

  const handleFavourite = () => {
    addRemoveFavourite(selectedContact)(contactDispatch);
  };

  const handleEdit = () => {
    contactDispatch({ type: OPEN_EDIT_CONTACTS_MODAL });
  };

  return (
    <DetailsWrapper>
      <div className="header-wrapper">
        <DetailsHeader>
          <img src={profileImage} alt="profileImage" />
          <p className="name">{name}</p>
          <ButtonsWrapper>
            <Button
              value={favourite ? "Remove from Favourite" : "Add to Favourite"}
              color="primary"
              onClick={handleFavourite}
            />
            <Button value="Edit" color="primary" onClick={handleEdit} />
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
          <p>{address.street_suite}</p>
          <p>{address.city}</p>
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
