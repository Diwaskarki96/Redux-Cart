import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
const initialState = {
  cartItems: cartItems,
  amount: 1,
  total: 0,
  isLoading: true,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseAmount: (state) => {
      state.amount = state.amount + 1;
    },
    decreseAmount: (state) => {
      state.amount = state.amount - 1;
    },
    clearCart: (state) => {
      //state.cartItems = [];
      //When you use return { cartItems: [] }; inside clearCart, the entire state is replaced with { cartItems: [] }, losing all other properties from initialState.
      return { cartItems: [] };
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
  },
});
export const { increaseAmount, decreseAmount, clearCart, removeItem } =
  cartSlice.actions;

export default cartSlice.reducer;
