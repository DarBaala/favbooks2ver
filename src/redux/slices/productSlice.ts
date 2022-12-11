import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "../../axios";

export type ProductItem = {
  _id: string;
  title: string;
  imageUrl: string;
  author: [string];
  price: number;
  tags: string;
  popular: number;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

interface ProductSliceState {
  items: ProductItem[];
  status: Status;
}

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async () => {
    const { data } = await axios.get("/product");
    return data;
  }
);

const initialState: ProductSliceState = {
  items: [],
  status: Status.LOADING,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct(state, action: PayloadAction<ProductItem[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchProduct.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setProduct } = productSlice.actions;

export default productSlice.reducer;
