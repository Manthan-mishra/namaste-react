import React, { useState, useEffect, useRef } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard.js";
import "./RestaurantContainer.css";
import { DUMMY_RES } from "../../utils/mockData.js";
import FilterRestaurants from "../../FilterRestaurants/FilterRestaurants.js";

const RestaurantContainer = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState(DUMMY_RES);
  const topRatedRef = useRef(false);

  useEffect(() => {
    const lowerSearch = searchText.toLowerCase();
    const filtered = DUMMY_RES.filter((restaurant) => {
      return (
        restaurant.name.toLowerCase().includes(lowerSearch) ||
        restaurant.cuisines.some((cuisine) =>
          cuisine.toLowerCase().includes(lowerSearch)
        )
      );
    });

    setFilteredRestaurants(filtered);
  }, [searchText]);

  // const handleTopRatedToggle = () => {};

  const handleTopRated = () => {
    topRatedRef.current = !topRatedRef.current;

    if (topRatedRef.current) {
      const filtered = DUMMY_RES.filter((res) => res.rating >= 4.5);
      setFilteredRestaurants(filtered);
    } else {
      setFilteredRestaurants(DUMMY_RES);
    }
  };

  return (
    <div className="restaurant-container-wrapper">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search restaurants or cuisines..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <FilterRestaurants
        onTopRated={handleTopRated}
        active={topRatedRef.current}
      />
      <div className="restaurant-container">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((res, index) => (
            <RestaurantCard key={index} {...res} />
          ))
        ) : (
          <p className="no-results">No restaurants found.</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantContainer;
