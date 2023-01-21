import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

type UserType = {
  createdAt: string;
  fullName: string;
  email: string;
  token: string;
  updatedAt: string;
  __v: number;
  _id: string;
  admin?: boolean;
};
type UserAuth = {
  email: string;
  password: string;
};
type UserRegister = {
  email: string;
  password: string;
};

interface AuthsSliceState {
  status: Status;
  data: null | UserType;
}

const initialState: AuthsSliceState = {
  data: null,
  status: Status.LOADING,
};

export const fetchAuth = createAsyncThunk(
  "auth/fetchAuth",
  async (params: UserAuth) => {
    const { data } = await axios.post("auth/login", params);
    return data;
  }
);

export const fetchAuthMe = createAsyncThunk("auth/fetchAuthMe", async () => {
  const { data } = await axios.get("auth/me");
  return data;
});

export const fetchRegister = createAsyncThunk(
  "auth/fetchRegister",
  async (params: UserRegister) => {
    const { data } = await axios.post("auth/register", params);
    return data;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogout(state) {
      state.data = null;
      window.localStorage.removeItem("token");
      state.status = Status.LOADING;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchAuth.pending, (state) => {
      state.status = Status.LOADING;
      state.data = null;
    });
    builder.addCase(fetchAuth.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchAuth.rejected, (state) => {
      state.status = Status.ERROR;
      state.data = null;
    });
    builder.addCase(fetchAuthMe.pending, (state) => {
      state.status = Status.LOADING;
      state.data = null;
    });
    builder.addCase(fetchAuthMe.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchAuthMe.rejected, (state) => {
      state.status = Status.ERROR;
      state.data = null;
    });
    builder.addCase(fetchRegister.pending, (state) => {
      state.status = Status.LOADING;
      state.data = null;
    });
    builder.addCase(fetchRegister.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchRegister.rejected, (state) => {
      state.status = Status.ERROR;
      state.data = null;
    });
  },
});
export const { setLogout } = authSlice.actions;

export default authSlice.reducer;
