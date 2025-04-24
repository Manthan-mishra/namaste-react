import "./RestaurantDetail.css";

const RestaurantDetail = () => {
  return (
    <div className="restaurant-detail">
      {/* HERO SECTION */}
      <div className="hero">
        <img
          src="https://images.unsplash.com/photo-1552566626-52f8b828add9"
          alt="Restaurant"
          className="hero-img"
        />
        <div className="overlay">
          <div className="hero-content">
            <h1>The Gourmet Palace</h1>
            <p>Indian, Continental, Chinese</p>
            <div className="hero-info">
              <span>⭐ 4.6</span>
              <span>₹₹ - Moderate Pricing</span>
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
      <div className="menu-preview">
        <h2>Menu Highlights</h2>
        <div className="menu-grid">
          {[
            {
              name: "Butter Chicken",
              desc: "Rich creamy tomato gravy with tender chicken",
              price: "₹299",
              img: "https://loremflickr.com/400/300/food,butter_chicken",
            },
            {
              name: "Paneer Tikka Masala",
              desc: "Spicy grilled paneer simmered in flavorful masala",
              price: "₹249",
              img: "https://images.unsplash.com/photo-1589308078055-ebd7a1a9e6bc",
            },
            {
              name: "Mutton Biryani",
              desc: "Fragrant basmati rice layered with juicy mutton",
              price: "₹349",
              img: "https://images.unsplash.com/photo-1673095859732-7e40f2c1091d",
            },
            {
              name: "Veg Manchurian",
              desc: "Crispy vegetable balls in spicy Indo-Chinese sauce",
              price: "₹199",
              img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
            },
            {
              name: "Choco Lava Cake",
              desc: "Molten chocolate center with soft baked crust",
              price: "₹149",
              img: "https://images.unsplash.com/photo-1608219959307-968ca3b7f6ec",
            },
          ].map((item, index) => (
            <div className="menu-card" key={index}>
              <img src={item.img} alt={item.name} />
              <div className="menu-info">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <span className="price">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

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
