import React from "react";
import CustomButton from "../custom-button/custom-button";
import "./cart-dropdown.scss";
import { connect } from "react-redux";
import { CartItem } from "../cart-item/cart-item";
import { HideCart } from "../../redux/cart/cart.action";
import { withRouter } from "react-router-dom";

const Cart = ({ cart, hidden, history, dispatch }) =>
  hidden ? null : (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cart.length ? (
          cart.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">No Available Items</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(HideCart());
        }}
      >
        {" "}
        Go To Checkout
      </CustomButton>
    </div>
  );

const mapStateToProps = (state) => ({
  hidden: state.cart.hidden,
  cart: state.cart.cartItems,
});

export default withRouter(connect(mapStateToProps)(Cart));
