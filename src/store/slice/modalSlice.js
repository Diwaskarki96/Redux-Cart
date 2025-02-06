import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};
export const cartSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});
export const { openModal, closeModal } = cartSlice.actions;

export default cartSlice.reducer;
