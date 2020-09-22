import React from "react";
import SignIn from "../../components/sign-in/sign-in";
import "./sign-in-and-sign-up.scss";
import SignUp from "../../components/sign-up/sign-up";

const SignInAndSignUp = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUp;
