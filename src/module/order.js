// 주문 갯수와 가격을 관리하는 redux
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalCount: 0,
  totalPrice: 0,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addItem: (state, { payload: { item } }) => {
      const itemIndex = state.items.findIndex(
        (ordered) => ordered.id === item.id
      );

      if (itemIndex !== -1) {
        state.items[itemIndex].quantity += 1;
      } else {
        state.items = [...state.items, { ...item, quantity: 1 }];
      }

      state.totalCount += 1;
      state.totalPrice += item.price;
    },
    removeItem: (state, { payload: { item } }) => {
      const itemIndex = state.items.findIndex(
        (ordered) => ordered.id === item.id
      );

      if (itemIndex !== -1) {
        if (state.items[itemIndex].quantity === 1) {
          state.items.splice(itemIndex, 1);
        } else {
          state.items[itemIndex].quantity -= 1;
        }
      }

      state.totalCount -= 1;
      state.totalPrice -= item.price;
    },
    initialized: (state) => {
      state = initialState;
    },
  },
});

export default orderSlice;
export const { addItem, removeItem, initialized } = orderSlice.actions;
