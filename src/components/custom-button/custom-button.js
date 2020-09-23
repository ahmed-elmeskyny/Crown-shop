import React from "react";
import "./custom-button.scss";

const CustomButton = ({
  children,
  IsGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    {...otherProps}
    className={`${inverted ? "inverted" : ""} ${
      IsGoogleSignIn ? "google-sign-in" : ""
    } custom-button`}
  >
    {children}
  </button>
);

export default CustomButton;
