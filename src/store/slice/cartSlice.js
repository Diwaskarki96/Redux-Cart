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
    increaseAmount: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decreseAmount: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
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
    calculateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});
export const {
  increaseAmount,
  decreseAmount,
  clearCart,
  removeItem,
  calculateTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
