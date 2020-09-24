import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { HideCart } from "../../redux/cart/cart.action";
import "./cart-icon.scss";
let x = 0;
const CartIcon = (props) => (
  <div className="cart-icon" onClick={props.HideCart}>
    <ShoppingIcon className="shopping-icon"></ShoppingIcon>
    <span className="item-count">{props.cart.length}</span>
  </div>
);
const mapStateToProps = (state) => ({
  cart: state.cart.cartItems,
});
const mapDispatchToProps = (dispatch) => ({
  HideCart: () => dispatch(HideCart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
