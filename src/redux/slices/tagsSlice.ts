import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

interface TagsSliceState {
  status: Status;
  tags: string[];
}

export const fetchTags = createAsyncThunk("product/fetchTags", async () => {
  const { data } = await axios.get("/product/tags");
  return data;
});

const initialState: TagsSliceState = {
  status: Status.LOADING,
  tags: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTags.pending, (state) => {
      state.status = Status.LOADING;
      state.tags = [];
    });
    builder.addCase(fetchTags.fulfilled, (state, action) => {
      state.tags = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchTags.rejected, (state) => {
      state.status = Status.ERROR;
      state.tags = [];
    });
  },
});

export default productSlice.reducer;
