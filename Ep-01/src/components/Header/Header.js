import React, { useState, useEffect } from "react";
import "./Header.css";
import { LOGO_URL } from "../../utils/constant";
import { Link } from "react-router-dom";

export const Header = () => {
  const [userStatus, setUserStatus] = useState("Login");

  const handleLoginStatus = () => {
    if (userStatus === "Login") setUserStatus("Logout");
    else setUserStatus("Login");
  };

  useEffect(() => {
    console.log("called");
  });

  return (
    <div className="header">
      <div className="logo-image">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-list">
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <button onClick={handleLoginStatus}>{userStatus}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
