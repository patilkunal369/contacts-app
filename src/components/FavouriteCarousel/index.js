import React from "react";
import { CarouselWrapper } from "./FavouriteCarousel.styles";
import { selectContact } from "../../context/actions/contacts/selectContact";
import { useGlobalContext } from "../../context/GlobalProvider";

const FavouriteCarousel = ({ favourites }) => {
  const { contactDispatch } = useGlobalContext();
  return (
    <CarouselWrapper>
      {favourites.map((contact, index) => (
        <div key={index}>
          <img
            src={contact.profileImage}
            onClick={() => selectContact(contact)(contactDispatch)}
          />
          <p>{contact.name}</p>
        </div>
      ))}
    </CarouselWrapper>
  );
};

export default FavouriteCarousel;
