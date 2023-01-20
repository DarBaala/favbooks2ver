import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";

import cart from "./slices/cartSlice";
import product from "./slices/productSlice";
import favorites from "./slices/favoritesSlice";
import tags from "./slices/tagsSlice";
import auth from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    cart,
    product,
    favorites,
    tags,
    auth,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
