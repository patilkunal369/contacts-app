import React from "react";
import Button from "../../common/Button";
import { OPEN_CREATE_CONTACTS_MODAL } from "../../constants/actionTypes";
import { useGlobalContext } from "../../context/GlobalProvider";
import { ButtonsWrapper } from "./AddDeleteContacts.styles";

const AddDeleteContacts = () => {
  const { contactDispatch } = useGlobalContext();
  return (
    <ButtonsWrapper>
      <Button
        name="addContact"
        color="primary"
        value="New Contact"
        onClick={() => contactDispatch({ type: OPEN_CREATE_CONTACTS_MODAL })}
      />

      <Button name="deleteContact" value="Delete" />
    </ButtonsWrapper>
  );
};

export default AddDeleteContacts;
