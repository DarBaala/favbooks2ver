import { configureStore } from "@reduxjs/toolkit";

import cart from "./slices/cartSlice";
import product from "./slices/productSlice";
import favorites from "./slices/favoritesSlice";

export const store = configureStore({
  reducer: {
    cart,
    product,
    favorites,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
