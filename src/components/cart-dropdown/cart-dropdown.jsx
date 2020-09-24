import React from "react";
import CustomButton from "../custom-button/custom-button";
import "./cart-dropdown.scss";
import { connect } from "react-redux";
import { CartItem } from "../cart-item/cart-item";

const Cart = ({ cart, hidden }) =>
  hidden ? null : (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cart.map((item) => (
          <CartItem item={item} />
        ))}
      </div>
      <CustomButton> Go To Checkout</CustomButton>
    </div>
  );

const mapStateToProps = (state) => ({
  hidden: state.cart.hidden,
  cart: state.cart.cartItems,
});

export default connect(mapStateToProps)(Cart);
