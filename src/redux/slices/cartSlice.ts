import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ProductItem } from "./productSlice";

import axios from "../../axios";

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface CartItem {
  price: number;
  product_id: string;
  quantity: number;
  totalPrice: number;
  _id?: string;
}

interface ProductSliceState {
  cart: ProductItem[] | any;
  status: Status;
  count: number;
}

export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  const { data } = await axios.get("/cart");

  console.log(data);
  return data;
});

export const fetchAddToCart = createAsyncThunk(
  "cart/fetchAddToCart",
  async (obj: CartItem) => {
    const { data } = await axios.post("/cart", obj);
    console.log(data);
    return data;
  }
);

const initialState: ProductSliceState = {
  cart: [],
  status: Status.LOADING,
  count: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setClearCart(state) {
      state.cart = null;
      state.count = 0;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchCart.pending, (state) => {
      state.cart = null;
      state.status = Status.LOADING;
    });
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      if (action.payload) {
        const { cartItems } = action.payload;
        let all = 0;
        cartItems.forEach((item: CartItem) => {
          all = all + item.quantity;
        });
        state.count = all;
        state.cart = cartItems;
      }
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchCart.rejected, (state) => {
      state.status = Status.ERROR;
      state.cart = null;
    });
    builder.addCase(fetchAddToCart.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(fetchAddToCart.fulfilled, (state, action) => {
      const { cart } = action.payload;
      let { cartItems } = cart;
      let all = 0;
      cartItems.forEach((item: CartItem) => {
        all = all + item.quantity;
      });
      state.count = all;
      state.cart = cartItems;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchAddToCart.rejected, (state) => {
      state.cart = null;
      state.status = Status.ERROR;
    });
  },
});

export const { setClearCart } = cartSlice.actions;

export default cartSlice.reducer;
