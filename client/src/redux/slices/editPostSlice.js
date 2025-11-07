import { createSlice } from "@reduxjs/toolkit";

const editPostSlice = createSlice({
  name: "editPost",
  initialState: {
    loading: false,
    success: false,
    error: null,
    updatedPost: null,
  },
  reducers: {
    editStart: (state) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    },

    editSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.updatedPost = action.payload;
    },

    editFailure: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    },

    resetEditState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.updatedPost = null;
    },
  },
});

export const { editStart, editSuccess, editFailure, resetEditState } =
  editPostSlice.actions;

export default editPostSlice.reducer;
