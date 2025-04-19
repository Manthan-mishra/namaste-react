import React from "react";
import "./Header.css";
import { LOGO_URL } from "../../utils/constant";

export const Header = () => {
  return (
    <div className="header">
      <div className="logo-image">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-list">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
