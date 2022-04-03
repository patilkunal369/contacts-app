import React from "react";
import { SpinnerWrapper } from "./Spinner.styles";

const Spinner = () => {
  return (
    <SpinnerWrapper>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </SpinnerWrapper>
  );
};

export default Spinner;
