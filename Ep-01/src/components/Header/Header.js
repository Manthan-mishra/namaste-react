import React, { useState, useEffect, useContext } from "react";
import "./Header.css";
import { LOGO_URL } from "../../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/hooks/useOnlineStatus";
import UserContext from "../../context/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const [userStatus, setUserStatus] = useState("Login");

  const cartItems = useSelector((state) => state.cart.items);

  const handleLoginStatus = () => {
    if (userStatus === "Login") setUserStatus("Logout");
    else setUserStatus("Login");
  };

  const loggedInUser = useSelector((state) => state.auth.userName);

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
          <li className="cart-link">
            <Link to="/cart">
              Cart
              {!!cartItems.length && (
                <span className="cart-badge">{cartItems?.length}</span>
              )}
            </Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <button onClick={handleLoginStatus}>{userStatus}</button>
          {userStatus === "Logout" && <li>{loggedInUser}</li>}
        </ul>
      </div>
    </div>
  );
};

export default Header;
