import React, { useState, useEffect } from "react";
import "./Header.css";
import { LOGO_URL } from "../../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/hooks/useOnlineStatus";

export const Header = () => {
  const [userStatus, setUserStatus] = useState("Login");

  const handleLoginStatus = () => {
    if (userStatus === "Login") setUserStatus("Logout");
    else setUserStatus("Login");
  };

  const { onlineStatus } = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-image">
        <Link to="/">
          <img className="logo" src={LOGO_URL} alt="logo" />
        </Link>
      </div>
      <div className="nav-list">
        <ul>
          <li className="online-status">
            Online Status:{" "}
            <span className="emoji">{onlineStatus ? "✅" : "❌"}</span>
          </li>
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
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/demo">Demo</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <button onClick={handleLoginStatus}>{userStatus}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
