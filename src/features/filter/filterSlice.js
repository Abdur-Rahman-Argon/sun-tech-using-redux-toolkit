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
      state.inStock = false;
    },
  },
});

export const { inStock } = filterSlice.actions;
export default filterSlice.reducer;
