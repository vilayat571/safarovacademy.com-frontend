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

interface IItem {
  setAllBlogs: any;
  category: any;
}

export const getSomeblogs = createAsyncThunk(
  "/getAllBlogs",
  async (item: IItem) => {
    return fetch(
      item.category == 0
        ? `https://api.safarovacademy.com/api/v1/blog/`
        : `https://api.safarovacademy.com/api/v1/blog/?category=${item.category}`
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
    builder.addCase(getSomeblogs.fulfilled, (state, action: PayloadAction) => {
      state.error = "";
      state.loading = false;
      state.blogs = action.payload;
    });
  },
});


export default fetchAllblogs.reducer;
