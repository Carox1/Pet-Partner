import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <span className="logo">PetPartner.</span>
        </div>
        <div className="right">
          <div className="icons">
            <span class="material-symbols-outlined">favorite</span>Add To Wishlist
          </div>
          <div className="icons">
            <span class="material-symbols-outlined">shopping_cart</span>Cart
          </div>
          <div className="icons">
            <span class="material-symbols-outlined">account_circle</span>My Account
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
