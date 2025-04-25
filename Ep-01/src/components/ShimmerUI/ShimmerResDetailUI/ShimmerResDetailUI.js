// ShimmerRestaurantDetail.js
import "../../RestaurantDetail/RestaurantDetail.css";
import "./ShimmerResDetailUi.css";

const ShimmerRestaurantDetail = () => {
  return (
    <div className="restaurant-detail">
      {/* HERO SHIMMER */}
      <div className="hero shimmer-bg">
        <div className="overlay">
          <div className="hero-content">
            <div className="shimmer shimmer-title"></div>
            <div className="shimmer shimmer-subtitle"></div>
            <div className="hero-info">
              <div className="shimmer shimmer-badge"></div>
              <div className="shimmer shimmer-badge"></div>
              <div className="shimmer shimmer-badge"></div>
            </div>
          </div>
        </div>
      </div>

      {/* GALLERY SHIMMER */}
      <div className="gallery">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="shimmer shimmer-box"></div>
            ))}
        </div>
      </div>

      {/* MENU SHIMMER */}
      <div className="menu-preview">
        <h2>Menu Highlights</h2>
        <div className="menu-grid">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <div className="menu-card" key={i}>
                <div className="shimmer shimmer-img"></div>
                <div className="menu-info">
                  <div className="shimmer shimmer-line short"></div>
                  <div className="shimmer shimmer-line"></div>
                  <div className="shimmer shimmer-price"></div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ShimmerRestaurantDetail;
