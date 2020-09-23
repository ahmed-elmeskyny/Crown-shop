import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { HideCart } from "../../redux/cart/cart.action";
import "./cart-icon.scss";

const CartIcon = (porps) => (
  <div className="cart-icon" onClick={porps.HideCart}>
    <ShoppingIcon className="shopping-icon"></ShoppingIcon>
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  HideCart: () => dispatch(HideCart()),
});
export default connect(null, mapDispatchToProps)(CartIcon);
