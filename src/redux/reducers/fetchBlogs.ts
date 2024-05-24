import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type TInitialstate = {
  data: any;
  loading: boolean;
  error: any;
};

interface IHoleData {
  setData: any;
  category?: number;
}

export const getBlogs = createAsyncThunk(
  "/getBlogs",
  async (holeData: IHoleData) => {


    //console.log('Category',holeData.category,`https://api.safarovacademy.com/api/v1/blog/categories/${holeData.category}`);

    fetch(
      holeData.category==10  ? `https://api.safarovacademy.com/api/v1/blog` :
        `https://api.safarovacademy.com/api/v1/blog/?t&category=${holeData.category}`
        
    )
      .then((res) => res.json())
      .then((data) => holeData.setData(data.results));
  }
  
);

const initialState: TInitialstate = {
  data: "",
  loading: false,
  error: null,
};

const blogsStoreReducer = createSlice({
  name: "blogsStoreReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBlogs.pending, (state) => {
      state.data = null;
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getBlogs.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getBlogs.rejected, (state, action) => {
      state.data = null;
      state.loading = true;
      state.error = action.payload;
    });
  },
});

export default blogsStoreReducer.reducer;
