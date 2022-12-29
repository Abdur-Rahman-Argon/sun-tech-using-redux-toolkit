import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  inStock: false,
  brand: [],
};
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    inStock: (state, action) => {
      state.inStock = !state.inStock;
    },
    toggleBrand: (state, action) => {
      //   state.brand.push("action.payload");
      const matched = state.brand.find((b) => b === action.payload);
      console.log(action, matched);
      if (!matched) {
        state.brand.push(action.payload);
      } else {
        state.brand = state.brand.filter((b) => b !== action.payload);
      }
    },
  },
});

export const { inStock, toggleBrand } = filterSlice.actions;
export default filterSlice.reducer;
