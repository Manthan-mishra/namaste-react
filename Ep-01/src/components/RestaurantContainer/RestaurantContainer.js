import React, { useState, useEffect, useRef } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard.js";
import "./RestaurantContainer.css";
// import { DUMMY_RES } from "../../utils/mockData.js";
import FilterRestaurants from "../FilterRestaurants/FilterRestaurants.js";
import Shimmer from "../ShimmerUI/ShimmerRestaurantUI/ShimmerRestaurant.js";

const RestaurantContainer = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const topRatedRef = useRef(false);
  const allRestraunts = useRef([]);

  useEffect(() => {
    console.log("called");

    fetchData();
  }, []);

  // const handleTopRatedToggle = () => {};

  const handleTopRated = () => {
    topRatedRef.current = !topRatedRef.current;

    if (topRatedRef.current) {
      const filtered = filteredRestaurants.filter(
        (res) => res?.info?.avgRating >= 4.4
      );
      setFilteredRestaurants(filtered);
    } else {
      // fetchData();
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

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.45970&lng=77.02820&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();
      const realData =
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setFilteredRestaurants(realData);
      allRestraunts.current = realData;
    } catch (err) {
      console.error("Error fetching restaurants:", err);
    } finally {
      setIsLoading(false);
    }
  };

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
