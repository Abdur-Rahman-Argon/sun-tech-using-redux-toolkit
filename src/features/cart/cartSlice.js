import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const selectProduct = state.cart.find(
        (p) => p._id === action.payload._id
      );

      if (!selectProduct) {
        const product = { ...action.payload, quantity: 1 };
        state.cart.push(product);
      } else {
        selectProduct.quantity += 1;
        state.cart
          .filter((p) => p._id !== selectProduct._id)
          .push(selectProduct);
      }
    },
    removeFromCart: (state, action) => {
      const removeProduct = action.payload;

      if (removeProduct.quantity > 1) {
        const product = {
          ...removeProduct,
          quantity: removeProduct.quantity - 1,
        };
        state.cart = state.cart.filter((p) => p._id !== removeProduct._id);

        state.cart.push(product);
      } else {
        state.cart = state.cart.filter((p) => p._id !== removeProduct._id);
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
