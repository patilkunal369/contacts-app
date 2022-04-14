import { Form, Formik } from "formik";
import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import Button from "../../common/Button";
import Input from "../../common/Form/Input";
import Spinner from "../../common/Spinner";
import { useGlobalContext } from "../../context/GlobalProvider";
import {
  ButtonsWrapper,
  ContentWrapper,
  CreateContactWrapper,
  FormHeader,
} from "./ContactForm.styles";

const ContactForm = ({
  setModalOpenDispatchType,
  initialValues,
  dispatcherFunction,
}) => {
  const {
    contactDispatch,
    contactsState: {
      contacts: { selectedContact },
      createContacts: { isLoading, isError, error },
    },
  } = useGlobalContext();
  const validate = ({ firstName, lastName, email, phone }) => {
    const errors = {};

    if (!firstName) errors.firstName = "Required";
    if (!lastName) errors.lastName = "Required";
    if (!phone) errors.phone = "Required";

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const handleSubmit = (values) => {
    const {
      id,
      firstName,
      lastName,
      email,
      phone,
      addressLineOne,
      addressLineTwo,
      company,
      title,
    } = values;

    const name = `${firstName} ${lastName}`;
    const address = {
      street_suite: addressLineOne,
      city: addressLineTwo,
    };

    const profileImage = `https://randomuser.me/api/portraits/men/${Math.floor(
      Math.random() * 100 + 1
    )}.jpg`;

    dispatcherFunction(
      selectedContact.id,
      name,
      email,
      phone,
      address,
      company,
      title,
      profileImage
    )(contactDispatch);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validate={validate}
    >
      {() => (
        <Form>
          {isLoading && <Spinner />}
          <CreateContactWrapper>
            <FormHeader>
              <img
                src="https://randomuser.me/api/portraits/men/23.jpg"
                alt="profileImage"
              />
              <Input type="text" name="firstName" placeholder="First name" />
              <Input type="text" name="lastName" placeholder="Last name" />
              <ButtonsWrapper>
                <Button value="Add to Favourite" />
                <Button value="Reset" type="reset" />
              </ButtonsWrapper>
            </FormHeader>

            <ContentWrapper>
              <header>
                <h3>Provide contact information</h3>
                <MdOutlineCancel
                  size="1.5rem"
                  onClick={() =>
                    contactDispatch({ type: setModalOpenDispatchType })
                  }
                  className="closeIcon"
                />
              </header>

              <div className="content">
                <Input type="text" name="email" placeholder="Email" />
              </div>

              <div className="content">
                <Input type="text" name="phone" placeholder="Mobile number" />
              </div>

              <div className="address">
                <Input
                  type="text"
                  name="addressLineOne"
                  placeholder="Apartment number/ Street Name"
                />
                <Input type="text" name="addressLineTwo" placeholder="City" />
              </div>
              <div className="job-details">
                <div className="content">
                  <Input type="text" name="company" placeholder="Company" />
                </div>
                <div className="content">
                  <Input type="text" name="title" placeholder="Job title" />
                </div>
              </div>

              <Button value="Save" color="primary" />
            </ContentWrapper>
          </CreateContactWrapper>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
