import React from "react";
import "../react_demo.css";

const RestaurantCard = ({ name, image, rating, deliveryTime, cuisines }) => {
  return (
    <div className="restaurant-card">
      <img className="restaurant-img" src={image} alt={name} />
      <div className="restaurant-details">
        <h3>{name}</h3>
        <p className="rating">
          ⭐ {rating} • {deliveryTime} mins
        </p>
        <p className="cuisines">{cuisines.join(", ")}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
