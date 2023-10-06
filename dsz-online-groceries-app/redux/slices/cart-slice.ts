import { createSlice } from "@reduxjs/toolkit";
import { Product } from "@/data/types";

const initialState = {
  loading: true,
  cartItems: <Product[]>[],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {},
    removeFromCart: (state, action) => {},
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
