import React from "react";
import "./CartPage.css";
import { useDispatch, useSelector } from "react-redux";
import { MENU_ITEM_BASE_URL } from "../../utils/constant";
import { clearCart, removeItem } from "../../redux/CartSlice/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  console.log("cartitems ", cartItems);

  const handleRemoveFromCart = (id) => {
    dispatch(removeItem(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Shopping Cart</h2>

      <div className="cart-list">
        {cartItems.map((cartItem) => {
          return (
            <div key={cartItem?.id} className="cart-card">
              <img
                src={`${MENU_ITEM_BASE_URL}${cartItem?.imageId}`}
                alt="Delicious Item"
                className="cart-image"
              />
              <div className="cart-info">
                <h3>{cartItem?.name}</h3>
                <p>{cartItem?.description}</p>
                <p>
                  <strong>Quantity:</strong> 1
                </p>
                <p className="cart-price">
                  {cartItem?.price / 100 || cartItem?.defaultPrice / 100}
                </p>
                <button
                  onClick={() => handleRemoveFromCart(cartItem?.id)}
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {!!cartItems.length && (
        <div className="cart-actions">
          <button onClick={handleClearCart} className="clear-cart-btn">
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
