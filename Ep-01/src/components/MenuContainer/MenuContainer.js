import React, { useState } from "react";
import ItemsList from "../ItemsList/ItemsList";
import "./MenuContainer.css";

const MenuContainer = ({ menuCategories }) => {
  const [expandedCategoryId, setExpandedCategoryId] = useState(null);

  const handleToggleItems = (categoryId) => {
    setExpandedCategoryId((prevId) =>
      prevId === categoryId ? null : categoryId
    );
  };

  return (
    <div className="menu-container">
      {menuCategories.map((category) => {
        const categoryId = category?.card?.card?.categoryId;
        const isExpanded = expandedCategoryId === categoryId;
        return (
          <div key={category?.card?.card?.categoryId} className="menu-category">
            <div
              className="menu-header"
              onClick={() => handleToggleItems(categoryId)}
            >
              <h5>{category?.card?.card?.title}</h5>
              <span>{isExpanded ? "⬆️" : "⬇️"}</span>
            </div>
            {isExpanded && (
              <ItemsList items={category?.card?.card?.itemCards} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MenuContainer;
