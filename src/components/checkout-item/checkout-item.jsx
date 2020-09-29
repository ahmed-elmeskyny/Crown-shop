import React from "react";
import "./checkout-item.scss";
import { connect } from "react-redux";
import {
  removeItem,
  addItem,
  decreaseQuantity,
} from "../../redux/cart/cart.action";

const CheckoutItem = ({ removeItem, cartItem, addItem, decreaseQuantity }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow  minus-arrow"
          onClick={() => {
            if (quantity === 1) {
              removeItem(cartItem);
            } else if (quantity > 1) {
              decreaseQuantity(cartItem);
            }
          }}
        >
          &#10134;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow plus-arrow" onClick={() => addItem(cartItem)}>
          &#10133;
        </div>
      </span>
      <span className="price">{price}$</span>
      <div className="remove-button" onClick={() => removeItem(cartItem)}>
        &#10008;{" "}
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  decreaseQuantity: (item) => dispatch(decreaseQuantity(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
