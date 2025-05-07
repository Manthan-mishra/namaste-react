import React from "react";
import { MENU_ITEM_BASE_URL } from "../../utils/constant";
import "./ItemsList.css";
import { addItem } from "../../redux/CartSlice/cartSlice";
import { useDispatch } from "react-redux";

const ItemsList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItemCart = (val) => {
    dispatch(addItem(val));
  };
  return (
    <div className="items-list">
      {items.map((item) => {
        return (
          <div key={item?.card?.info?.id} className="item-card">
            <div className="item-details">
              <p className="item-name">{item?.card?.info?.name}</p>
              <p className="item-price">₹{item?.card?.info?.price / 100}</p>
              <p className="item-description">
                {item?.card?.info?.description}
              </p>
            </div>
            <img
              src={`${MENU_ITEM_BASE_URL}${item?.card?.info?.imageId}`}
              alt="ksdujgsbd"
            />
            <button onClick={() => handleAddItemCart(item?.card?.info)}>
              Add
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ItemsList;
