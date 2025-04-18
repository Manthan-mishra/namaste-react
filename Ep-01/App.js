import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantContainer from "./components/RestaurantContainer.js";

const jsxHeading = <div>This is JSX</div>;
console.log(jsxHeading);

const Header = () => {
  return (
    <div className="header">
      <div className="logo-image">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbMOneNfFp7v3s6jRERn9DgBoNWBAvNLcKFw&s"
          alt="logo"
        />
      </div>
      <div className="nav-list">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <RestaurantContainer />
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
