import React, { useState } from "react";
import "./Header.css";
import { LOGO_URL } from "../../utils/constant";

export const Header = () => {
  const [userStatus, setUserStatus] = useState("Login");

  const handleLoginStatus = () => {
    if (userStatus === "Login") setUserStatus("Logout");
    else setUserStatus("Login");
  };
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
          <button onClick={handleLoginStatus}>{userStatus}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
