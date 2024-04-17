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

//https://api.safarovacademy.com/api/v1/blog/?category=3

interface IItem {
  setAllBlogs: any;
  category: any;
}

export const getAllBlogs = createAsyncThunk(
  "/getAllBlogs",
  async (item: IItem) => {
    //console.log( item.category==0 ? `https://api.safarovacademy.com/api/v1/blog/` :  `https://api.safarovacademy.com/api/v1/blog/?category=${item.category}` )
    return fetch(
      item.category==0 ? `https://api.safarovacademy.com/api/v1/blog/` :  `https://api.safarovacademy.com/api/v1/blog/?category=${item.category}` 
    )
      .then((response) => response.json())
      .then((data) => item.setAllBlogs(data.results));
  
  }
);

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
