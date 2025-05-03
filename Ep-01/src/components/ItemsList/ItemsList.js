import React from "react";
import { MENU_ITEM_BASE_URL } from "../../utils/constant";
import "./ItemsList.css";

const ItemsList = ({ items }) => {
  return (
    <div className="items-list">
      {items.map((item) => {
        return (
          <div key={item?.card?.info?.id} className="item-card">
            <div>
              <p>{item?.card?.info?.name}</p>
              <p>₹{item?.card?.info?.price / 100}</p>
              <p>{item?.card?.info?.description}</p>
            </div>
            <img
              src={`${MENU_ITEM_BASE_URL}${item?.card?.info?.imageId}`}
              alt="ksdujgsbd"
            />
          </div>
        );
      })}
    </div>
  );
};

export default ItemsList;
