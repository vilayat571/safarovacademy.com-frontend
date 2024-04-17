import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface AllBlogs {
  blogs: any;
  loading: boolean;
  error: string;
}

const initialState: AllBlogs = {
  blogs: null,
  loading: false,
  error: "",
};

export const getAllBlogs = createAsyncThunk("/getAllBlogs", async (setAllBlogs:any) => {
  const url = "https://api.safarovacademy.com/api/v1/blog/";
  return fetch(url)
    .then((response) => response.json())
    .then((data) => setAllBlogs(data.results));
});

const fetchAllblogs = createSlice({
  name: "fetchAllblogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllBlogs.fulfilled, (state, action: PayloadAction) => {
      state.error = "";
      state.loading = false;
      state.blogs = action.payload;
    });
  },
});

export default fetchAllblogs.reducer;
