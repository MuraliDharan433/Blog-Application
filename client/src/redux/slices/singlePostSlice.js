import { createSlice } from "@reduxjs/toolkit";

const singlePostSlice = createSlice({
  name: "singlePost",
  initialState: {
    post: null,
    loading: false,
    error: null,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.post = action.payload;
    },
    fetchFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearPost: (state) => {
      state.post = null;
      state.error = null;
      state.loading = false;
    },
  },
});

export const { fetchFailure, fetchStart, fetchSuccess, clearPost } =
  singlePostSlice.actions;

export default singlePostSlice.reducer;
