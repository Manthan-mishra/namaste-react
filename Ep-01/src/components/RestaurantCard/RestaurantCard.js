import React from "react";
import "./RestaurantCard.css";
import { IMG_BASE_URL } from "../../utils/constant";

const RestaurantCard = ({ info }) => {
  // console.log("info ", info);
  const { name, cloudinaryImageId, avgRating, cuisines, sla } = info;
  const { deliveryTime } = sla;

  return (
    <div className="restaurant-card">
      <img
        className="restaurant-img"
        src={`${IMG_BASE_URL}${cloudinaryImageId}`}
        alt={name}
      />
      <div className="restaurant-details">
        <h3>{name}</h3>
        <p className="rating">
          ⭐ {avgRating} • {deliveryTime} mins
        </p>
        <p className="cuisines">{cuisines.join(", ")}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
