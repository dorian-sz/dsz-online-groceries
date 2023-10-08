import { createSlice, current } from "@reduxjs/toolkit";
import { Product } from "@/data/types";

const initialState = {
  loading: true,
  cartItems: [] as { product: Product; quantity: number }[],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.product.id === item.product.id
      );
      if (existingItem) {
        existingItem.quantity = existingItem.quantity + 1;
      } else {
        state.cartItems = [...state.cartItems, item];
      }
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
    removeFromCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.product.id === item.product.id
      );
      if (existingItem && existingItem?.quantity > 1) {
        existingItem.quantity = existingItem.quantity - 1;
      } else {
        state.cartItems = state.cartItems.filter(
          (cartItem) => cartItem.product.id !== item.product.id
        );
      }
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
    hideLoading: (state) => {
      state.loading = false;
    },
  },
});

export const { addToCart, removeFromCart, hideLoading } = cartSlice.actions;
export default cartSlice.reducer;
