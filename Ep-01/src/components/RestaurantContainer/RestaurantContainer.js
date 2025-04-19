import React, { useState } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard.js";
import "./RestaurantContainer.css";

const dummyRestaurants = [
  {
    name: "Spice Symphony",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    deliveryTime: 30,
    cuisines: ["Indian", "Asian", "Grill"],
  },
  {
    name: "Pasta Palace",
    image:
      "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=800&q=80",
    rating: 4.3,
    deliveryTime: 25,
    cuisines: ["Italian", "Pasta", "Continental"],
  },
  {
    name: "Sushi House",
    image:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    deliveryTime: 20,
    cuisines: ["Japanese", "Sushi"],
  },
  {
    name: "Burger Barn",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    rating: 4.2,
    deliveryTime: 22,
    cuisines: ["American", "Burgers", "Fast Food"],
  },
  {
    name: "Taco Town",
    image:
      "https://images.unsplash.com/photo-1572284918354-8b5c764b1215?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.1,
    deliveryTime: 28,
    cuisines: ["Mexican", "Tacos", "Street Food"],
  },
  {
    name: "Dragon Delight",
    image:
      "https://images.unsplash.com/photo-1666278172017-ad93e14c329d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.6,
    deliveryTime: 27,
    cuisines: ["Chinese", "Asian", "Dimsum"],
  },
  {
    name: "Green Bowl",
    image:
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    deliveryTime: 24,
    cuisines: ["Healthy", "Vegan", "Salads"],
  },
  {
    name: "BBQ Junction",
    image:
      "https://images.unsplash.com/photo-1561931557-df299338ab39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.5,
    deliveryTime: 35,
    cuisines: ["Barbecue", "Grill", "Steakhouse"],
  },
];

const RestaurantContainer = () => {
  const [searchText, setSearchText] = useState("");

  const filteredRestaurants = dummyRestaurants.filter((restaurant) => {
    const lowerSearch = searchText.toLowerCase();
    return (
      restaurant.name.toLowerCase().includes(lowerSearch) ||
      restaurant.cuisines.some((cuisine) =>
        cuisine.toLowerCase().includes(lowerSearch)
      )
    );
  });

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
