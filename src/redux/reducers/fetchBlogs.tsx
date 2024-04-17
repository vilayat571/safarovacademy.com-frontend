import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Blogs from "../../pages/Blogs/Blogs";

export interface Blogs {
  blogs: any;
  loading: boolean;
  error: string | null;
}

const initialState: Blogs = {
  blogs: [],
  loading: false,
  error: null,
};

export const fetchData = createAsyncThunk("/fetchData", async () => {
  const url = "http://194.15.52.124:8000/api/v1/blog/";
  return fetch(url)
    .then((response) => response.json())
    
   
});

const fetchBlogs = createSlice({
  name: "fetchBlogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action:PayloadAction) => {

      state.blogs = action.payload;
      state.error = null;
      state.loading = false;
    });
  },
});


export default fetchBlogs.reducer;