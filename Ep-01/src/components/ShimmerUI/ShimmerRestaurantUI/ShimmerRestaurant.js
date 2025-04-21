// components/Shimmer.js
import React from "react";
import "./ShimmerRestaurant.css";

const Shimmer = () => {
  return (
    <div className="restaurant-card shimmer">
      <div className="shimmer-img" />
      <div className="shimmer-details">
        <div className="shimmer-line title" />
        <div className="shimmer-line rating" />
        <div className="shimmer-line cuisines" />
      </div>
    </div>
  );
};

export default Shimmer;
