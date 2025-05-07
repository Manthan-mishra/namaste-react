import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice/cartSlice";
import authReducer from "./UserSlice/UserSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
});

export default appStore;
