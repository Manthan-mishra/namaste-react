import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-image">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbMOneNfFp7v3s6jRERn9DgBoNWBAvNLcKFw&s"
          alt="logo"
        />
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
