import React from "react";
import "./FilterRestaurants.css";
import { FaStar } from "react-icons/fa";

const FilterRestaurants = ({ onTopRated, active }) => {
  return (
    <div className="restaurant-filters">
      <button
        onClick={onTopRated}
        className={`${active ? "filter-active" : ""}`}
      >
        <FaStar style={{ marginRight: "8px" }} />
        Top Rated
      </button>
    </div>
  );
};

export default FilterRestaurants;
