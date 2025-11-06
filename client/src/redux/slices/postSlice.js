import { createSlice } from "@reduxjs/toolkit";


const postSlice = createSlice({
     name:'posts',
     initialState:{posts:[]},
     reducers:{
          setPosts:(state,action)=>{
               state.posts = action.payload;
          },
          addPost:(state,action)=>{
               state.posts.unshift(action.payload)
          },
          updatePost:(state,action)=>{
               const index = state.posts.findIndex((p)=> p._id === action.payload._id)
               if(index !== -1) state.posts[index] = action.payload
          },
          deletePost:(state,action)=>{
               state.posts = state.posts.filter((p)=>p._id !== action.payload)
          }
     }
})


export const {addPost,setPosts,updatePost,deletePost} = postSlice.actions;

export default postSlice.reducer