import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type TInterface = {
  data: any;
  loading: boolean;
  error: any;
};

export const getBlogs = createAsyncThunk("/getBlogs", async () => {
  const url = "https://api.safarovacademy.com/api/v1/blog/";

  const res = await fetch(url);
  const blogs = await res.json();
  return blogs;

});

const initialState: TInterface = {
  data: "",
  loading: false,
  error: null,
};

const blogsStoreReducer = createSlice({
  name: "blogsStoreReducer",
  initialState,
  reducers: {},
  extraReducers: () => {},
});


export default blogsStoreReducer.reducer;