import { createSlice } from "@reduxjs/toolkit";
import { ProductItem } from "./productSlice";

interface ProductSliceState {
  items: ProductItem[];
}

const initialState: ProductSliceState = {
  items: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setFavorites(state, action) {
      state.items.push(action.payload);
    },
    setFavoritesDelete(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload.id);
    },
  },
});
export const { setFavorites, setFavoritesDelete } = favoritesSlice.actions;

export default favoritesSlice.reducer;
