import React from "react";
import Modal from "react-modal";
import { CLOSE_EDIT_CONTACTS_MODAL } from "../../constants/actionTypes";
import { editContact } from "../../context/actions/contacts/editContact";
import { useGlobalContext } from "../../context/GlobalProvider";
import ContactForm from "../ContactForm";

const EditContact = () => {
  const {
    contactDispatch,
    contactsState: {
      contacts: { selectedContact },
      editContacts: { isEditContactModalOpen },
    },
  } = useGlobalContext();

  const {
    name,
    profileImage,
    email,
    phone,
    address,
    company,
    title,
    favourite,
    id,
  } = selectedContact;

  const initialValues = {
    id,
    firstName: name.split(" ")[0],
    lastName: name.split(" ")[1],
    email: email,
    phone: phone,
    addressLineOne: address.street_suite,
    addressLineTwo: address.city,
    company: company,
    title: title,
  };

  return (
    <Modal
      isOpen={isEditContactModalOpen}
      onRequestClose={() => contactDispatch(CLOSE_EDIT_CONTACTS_MODAL)}
      className="createContactModal"
      overlayClassName="createContactOverlay"
    >
      <>
        <ContactForm
          setModalOpenDispatchType={CLOSE_EDIT_CONTACTS_MODAL}
          initialValues={initialValues}
          dispatcherFunction={editContact}
        />
      </>
    </Modal>
  );
};

export default EditContact;
