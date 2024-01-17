// 주문 갯수와 가격을 관리하는 redux
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  price: 0,
};

const orderSlice = createSlice({
  name: "order",
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

export default orderSlice;
export const { changeField } = orderSlice.actions;
