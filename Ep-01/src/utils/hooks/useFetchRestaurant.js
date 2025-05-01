import React, { useState, useEffect, useRef } from "react";

const useFetchRestaurant = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const allRestraunts = useRef([]);
  useEffect(() => {
    const fetchRestaurant = async () => {
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

    fetchRestaurant();
  }, []);

  return {
    isLoading,
    filteredRestaurants,
    allRestraunts,
    setFilteredRestaurants,
  };
};

export default useFetchRestaurant;
