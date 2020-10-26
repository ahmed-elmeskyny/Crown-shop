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
          <span role="img" aria-label="nai">
            {" "}
            &#10134;
          </span>
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow plus-arrow" onClick={() => addItem(cartItem)}>
          <span role="img" aria-label="nai">
            {" "}
            &#10133;
          </span>
        </div>
      </span>
      <span className="price">{price}$</span>
      <div className="remove-button" onClick={() => removeItem(cartItem)}>
        <span role="img" aria-label="nai">
          {" "}
          &#10008;
        </span>{" "}
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
