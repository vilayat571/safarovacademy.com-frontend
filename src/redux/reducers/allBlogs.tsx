import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


interface BItem {
    setAllBlogs: any;
  }

export const getAllBlogs = createAsyncThunk("/getAllBlogs", async (item:BItem) => {
  return fetch(`https://api.safarovacademy.com/api/v1/blog/`)
    .then((response) => response.json())
    .then((data) => item.setAllBlogs(data.results));
});

interface initialState {
  allBlogs: any;
  loading: boolean;
  error: string;
}

const initialState: initialState = {
  allBlogs: null,
  loading: false,
  error: "",
};

const fetchHoleBlogs = createSlice({
  name: "fetchHoleBlogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllBlogs.fulfilled, (state, action) => {
      state.error = "";
      state.loading = false;
      state.allBlogs = action.payload;
    });
  },
});

export default fetchHoleBlogs.reducer;
