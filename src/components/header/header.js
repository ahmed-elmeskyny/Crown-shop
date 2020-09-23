import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase-utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon";
import Cart from "../cart-dropdown/cart-dropdown";

const Header = (props) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo " />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/shop" className="option">
        CONTACT
      </Link>
      {props.currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          {" "}
          Sign Out{" "}
        </div>
      ) : (
        <Link className="option" to="/signin">
          Sign In{" "}
        </Link>
      )}
      <CartIcon></CartIcon>
    </div>
    <Cart></Cart>
  </div>
);
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
