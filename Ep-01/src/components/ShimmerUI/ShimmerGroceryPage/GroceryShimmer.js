import React from "react";
import "./GroceryShimmer.css";

const GroceryShimmer = () => {
  return (
    <div className="grocery-container">
      <h1 className="grocery-heading shimmer-heading"></h1>
      <div className="grocery-grid">
        {Array(6)
          .fill("")
          .map((_, index) => (
            <div key={index} className="grocery-card shimmer-card">
              <div className="card-img-wrapper shimmer-img"></div>
              <div className="shimmer-text short"></div>
              <div className="shimmer-text long"></div>
              <div className="shimmer-button"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default GroceryShimmer;
