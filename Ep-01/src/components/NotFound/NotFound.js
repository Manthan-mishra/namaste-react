import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="plate">
        <div className="food">🍝</div>
      </div>
      <h1 className="title">404 - Dish Not Found</h1>
      <p className="subtitle">
        Looks like the recipe you're looking for doesn't exist.
      </p>
      <Link to="/" className="home-button">
        🍽️ Return to Menu (Home)
      </Link>
    </div>
  );
};

export default NotFound;
