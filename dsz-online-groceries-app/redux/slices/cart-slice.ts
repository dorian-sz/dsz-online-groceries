import { createSlice } from "@reduxjs/toolkit";
import { Product } from "@/data/types";

const initialState = {
  loading: true,
  cartItems: [] as { product: Product; quantity: Number }[],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const product: Product = item.product;
      const exists = state.cartItems.find(
        (cartItem) => cartItem.product.id === item.id
      );
      if (exists) {
        state.cartItems = state.cartItems.map((cartItem) =>
          cartItem.product.id === exists.product.id ? item : cartItem
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
      item.quantity++;
      state.totalPrice = parseFloat(
        state.cartItems
          .reduce(
            (acc, cartItem) =>
              acc + Number(cartItem.product.price) * Number(cartItem.quantity),
            0
          )
          .toFixed(2)
      );
    },
    removeFromCart: (state, action) => {},
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
