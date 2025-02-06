import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cartSlice";
import modalReducer from "./slice/modalSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});
