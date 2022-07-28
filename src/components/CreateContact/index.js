import React from "react";
import Modal from "react-modal";
import { useGlobalContext } from "../../context/GlobalProvider";
import ContactForm from "../ContactForm";
import { createContact } from "../../context/actions/contacts/createContact";
import {
  CLOSE_CREATE_CONTACTS_MODAL,
  OPEN_CREATE_CONTACTS_MODAL,
} from "../../constants/actionTypes";

const CreateContact = () => {
  const {
    contactsState: {
      createContacts: { isCreateContactModalOpen },
    },
    contactDispatch,
  } = useGlobalContext();

  const initialValues = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    addressLineOne: "",
    addressLineTwo: "",
    company: "",
    title: "",
  };
  return (
    <Modal
      isOpen={isCreateContactModalOpen}
      onRequestClose={() =>
        contactDispatch({ type: CLOSE_CREATE_CONTACTS_MODAL })
      }
      className="createContactModal"
      overlayClassName="createContactOverlay"
    >
      <>
        <ContactForm
          setModalOpenDispatchType={CLOSE_CREATE_CONTACTS_MODAL}
          initialValues={initialValues}
          dispatcherFunction={createContact}
        />
      </>
    </Modal>
  );
};

export default CreateContact;
