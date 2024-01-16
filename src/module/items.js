import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  price: 0,
};

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    changeField: (state, { payload: { count, price } }) => {
      state.count = count;
      state.price = price;
    },
    initialized: (state) => {
      state = initialState;
    },
  },
});

export default itemSlice;
export const { changeField } = itemSlice.actions;
