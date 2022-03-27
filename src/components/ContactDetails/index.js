import React from "react";
import {
  ButtonsWrapper,
  ContentWrapper,
  DetailsHeader,
  DetailsWrapper,
} from "./ContactsDetails.styles";

const ContactDetails = () => {
  return (
    <DetailsWrapper>
      <div className="header-wrapper">
        <DetailsHeader>
          <img
            src="https://randomuser.me/api/portraits/men/23.jpg"
            alt="profileImage"
          />
          <p className="name">Leanne Graham</p>
          <ButtonsWrapper>
            <button> Add to favorites</button>
            <button>Edit</button>
            <button>Delete</button>
          </ButtonsWrapper>
        </DetailsHeader>
      </div>
      <ContentWrapper>
        <h3>Contact Information</h3>

        <div className="content">
          <label>Email</label>
          <p>Sincere@april.biz</p>
        </div>

        <div className="content">
          <label>Mobile</label>
          <p>1-770-736-8031</p>
        </div>

        <div className="content">
          <label>Address</label>
          <p>Kulas Light Apt. 556 </p>
          <p>Gwenborough 92998-3874</p>
        </div>
        <div className="job-details">
          <div className="content">
            <label>Company</label>
            <p>Romaguera-Crona</p>
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
