import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import postReducer from "./slices/postSlice";
import singlePostReducer from "./slices/singlePostSlice";
import editPostReducer from "./slices/editPostSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postReducer,
    singlePost: singlePostReducer,
    editPost: editPostReducer,
  },
});
