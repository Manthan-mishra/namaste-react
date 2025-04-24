import React from "react";
import "./RestaurantCard.css";
import { IMG_BASE_URL } from "../../utils/constant";
import { Link } from "react-router-dom";

const RestaurantCard = ({ info }) => {
  // console.log("info ", info);
  const { id, name, cloudinaryImageId, avgRating, cuisines, sla } = info;
  const { deliveryTime } = sla;

  return (
    <Link to={`/restaurant/${id}`} className="restaurant-card-link">
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
    </Link>
  );
};

export default RestaurantCard;
