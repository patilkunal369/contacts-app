import React from "react";
import { StyledButton } from "./Button.styles";

const Button = ({ value, color, ...rest }) => {
  return (
    <StyledButton color={color} {...rest}>
      {value}
    </StyledButton>
  );
};

export default Button;
