import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { HideCart } from "../../redux/cart/cart.action";
import "./cart-icon.scss";
const CartIcon = ({ cartCount, HideCart }) => (
  <div className="cart-icon" onClick={HideCart}>
    <ShoppingIcon className="shopping-icon"></ShoppingIcon>
    <span className="item-count">{cartCount}</span>
  </div>
);
const mapStateToProps = (state) => ({
  cartCount: state.cart.cartItems.reduce(
    (acuu, cartItem) => acuu + cartItem.quantity,
    0
  ),
});
const mapDispatchToProps = (dispatch) => ({
  HideCart: () => dispatch(HideCart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
