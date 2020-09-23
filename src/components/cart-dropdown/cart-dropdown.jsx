import React from "react";
import CustomButton from "../custom-button/custom-button";
import "./cart-dropdown.scss";
import { connect } from "react-redux";

const Cart = (props) =>
  props.hidden ? null : (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton> Go To Checkout</CustomButton>
    </div>
  );
const mapStateToProps = (state) => ({
  hidden: state.cart.hidden,
});

export default connect(mapStateToProps)(Cart);
