import React from "react";
import "./OfflinePage.css";

const OfflinePage = () => {
  return (
    <div className="offline-container">
      <div className="offline-card">
        <h1 className="offline-title">🍽️ You're Offline!</h1>
        <p className="offline-message">
          Our chefs are on a break until you're back online.
        </p>
        <div className="steam-animation">
          <div className="steam s1"></div>
          <div className="steam s2"></div>
          <div className="steam s3"></div>
        </div>
        <div className="plate">🍜</div>
      </div>
    </div>
  );
};

export default OfflinePage;
