import React from "react";
import "./custom-button.scss";

const CustomButton = ({ children, IsGoogleSignIn, ...otherProps }) => (
  <button
    {...otherProps}
    className={`${IsGoogleSignIn ? "google-sign-in" : ""} custom-button`}
  >
    {children}
  </button>
);

export default CustomButton;
