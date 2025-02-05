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
    decreseAmount: (state, action) => {
      state.amount = state.amount - 1;
      console.log(action);
    },
    clearCart: (state) => {
      //state.cartItems = [];
      //When you use return { cartItems: [] }; inside clearCart, the entire state is replaced with { cartItems: [] }, losing all other properties from initialState.
      return { cartItems: [] };
    },
  },
});
export const { increaseAmount, decreseAmount, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
