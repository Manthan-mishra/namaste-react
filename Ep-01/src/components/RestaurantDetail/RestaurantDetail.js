import { useParams } from "react-router-dom";
import "./RestaurantDetail.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ShimmerRestaurantDetail from "../ShimmerUI/ShimmerResDetailUI/ShimmerResDetailUI";
import { IMG_BASE_URL, MENU_ITEM_BASE_URL } from "../../utils/constant";
import useFetchMenu from "../../utils/hooks/useFetchMenu";
import MenuContainer from "../MenuContainer/MenuContainer";

const RestaurantDetail = () => {
  const location = useLocation();
  const { state } = location;
  const { resId } = useParams();
  const { menuItems, resName, isLoading } = useFetchMenu(resId);

  if (isLoading) return <ShimmerRestaurantDetail />;

  return (
    <div className="restaurant-detail">
      {/* HERO SECTION */}
      <div className="hero">
        <img
          src={`${IMG_BASE_URL}${state?.cloudinaryImageId}`}
          alt="Restaurant"
          className="hero-img"
        />
        <div className="overlay">
          <div className="hero-content">
            <h1>{resName}</h1>
            <p>{state?.cuisines.join(", ")}</p>
            <div className="hero-info">
              <span>⭐ {state?.avgRating}</span>
              <span>{state?.costForTwo}</span>
              <span>Open Now</span>
            </div>
          </div>
        </div>
      </div>

      {/* GALLERY */}
      <div className="gallery">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          {[
            "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
            "https://images.unsplash.com/photo-1543353071-873f17a7a088",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
            "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
          ].map((url, i) => (
            <img key={i} src={url} alt={`Gallery ${i}`} />
          ))}
        </div>
      </div>

      {/* MENU */}

      {/* {menuItems && (
        <div className="menu-preview">
          <h2>Menu Highlights</h2>
          <div className="menu-grid">
            {menuItems.map((item) => (
              <div className="menu-card" key={item?.card?.info?.id}>
                <img
                  src={`${MENU_ITEM_BASE_URL}${item?.card?.info?.imageId}`}
                  alt={item.name}
                />
                <div className="menu-info">
                  <h3>{item?.card?.info?.name}</h3>
                 
                  <span className="price">
                    ₹
                    {item?.card?.info?.price / 100 ||
                      item?.card?.info?.defaultPrice / 100}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )} */}
      <MenuContainer menuCategories={menuItems} />

      {/* REVIEWS */}
      <div className="reviews">
        <h2>Customer Reviews</h2>
        <div className="review-card">
          <h4>Aarav K.</h4>
          <p>“Amazing ambiance, food was top-notch, loved every bite!”</p>
        </div>
        <div className="review-card">
          <h4>Sneha M.</h4>
          <p>
            “Clean place, friendly staff, and quick service. Highly recommend!”
          </p>
        </div>
      </div>

      {/* LOCATION */}
      <div className="location">
        <h2>Find Us Here</h2>
        <iframe
          title="Restaurant Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14009.375417980524!2d77.02664095!3d28.45949765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7b3e3e7d5a2f6aef!2sRestaurant!5e0!3m2!1sen!2sin!4v1680000000000"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* CTA */}
      <div className="cta-buttons">
        <button className="btn primary">Reserve a Table</button>
        <button className="btn">Order Now</button>
      </div>
    </div>
  );
};

export default RestaurantDetail;
