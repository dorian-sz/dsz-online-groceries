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
    addToCart: (state, action) => {
      const item: Product = action.payload;
      const exists = state.cartItems.find((product) => product.id === item.id);
      if (exists) {
        state.cartItems = state.cartItems.map((product) =>
          product.id === exists.id ? item : product
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
      state.totalPrice = parseFloat(
        (Number(state.totalPrice) + Number(item.price)).toFixed(2)
      );
    },
    removeFromCart: (state, action) => {},
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
