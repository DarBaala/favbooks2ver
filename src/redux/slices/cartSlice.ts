import { createSlice } from "@reduxjs/toolkit";
import { ProductItem } from "./productSlice";

interface ProductSliceState {
  items: ProductItem[];
  count: number;
}

const initialState: ProductSliceState = {
  items: [],
  count: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart(state, action) {
      state.items.push(action.payload);
      state.count++
    },
    setCartDelete(state, action) {
      state.items = state.items.filter((obj) => obj._id !== action.payload._id);
      state.count--
    },
  },
});

export const { setCart, setCartDelete } = cartSlice.actions;

export default cartSlice.reducer;
