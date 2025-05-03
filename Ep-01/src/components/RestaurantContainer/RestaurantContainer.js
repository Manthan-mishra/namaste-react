import React, { useState, useRef } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard.js";
import "./RestaurantContainer.css";
import FilterRestaurants from "../FilterRestaurants/FilterRestaurants.js";
import Shimmer from "../ShimmerUI/ShimmerRestaurantUI/ShimmerRestaurant.js";
import useFetchRestaurant from "../../utils/hooks/useFetchRestaurant.js";

const RestaurantContainer = () => {
  const [searchText, setSearchText] = useState("");

  const topRatedRef = useRef(false);

  const {
    isLoading,
    filteredRestaurants,
    allRestraunts,
    setFilteredRestaurants,
  } = useFetchRestaurant();

  const handleTopRated = () => {
    topRatedRef.current = !topRatedRef.current;

    if (topRatedRef.current) {
      const filtered = filteredRestaurants.filter(
        (res) => res?.info?.avgRating >= 4.4
      );
      setFilteredRestaurants(filtered);
    } else {
      setFilteredRestaurants(allRestraunts.current);
    }
  };

  const handleSearch = (text) => {
    setSearchText(text);

    const lowerSearch = text.toLowerCase();
    const filtered = allRestraunts.current.filter((restaurant) => {
      const name = restaurant?.info?.name?.toLowerCase() || "";
      const cuisines = restaurant?.info?.cuisines || [];

      return (
        name.includes(lowerSearch) ||
        cuisines.some((cuisine) => cuisine.toLowerCase().includes(lowerSearch))
      );
    });

    setFilteredRestaurants(filtered);
  };

  console.log("filteredRestaurants ", filteredRestaurants);

  return (
    <div className="restaurant-container-wrapper">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search restaurants or cuisines..."
          value={searchText}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      <FilterRestaurants
        onTopRated={handleTopRated}
        active={topRatedRef.current}
      />
      <div className="restaurant-container">
        {isLoading ? (
          Array(10)
            .fill(0)
            .map((_, index) => <Shimmer key={index} />)
        ) : filteredRestaurants?.length > 0 ? (
          filteredRestaurants.map((res) => (
            <RestaurantCard key={res.info.id} {...res} />
          ))
        ) : (
          <p className="no-results">No restaurants found.</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantContainer;
