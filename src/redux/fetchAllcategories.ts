// url='https://api.safarovacademy.com/api/v1/blog/categories/';

import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface InitialStateOfCategories {
  categories: any;
  loading: false;
  error: any;
}

export const fetchCategories = createAsyncThunk(
  "/fetchCategories",
  async () => {
    const url = "https://api.safarovacademy.com/api/v1/blog/categories/";
    return fetch(url).then((res) => res.json());
  }
);

const initialState: InitialStateOfCategories = {
  categories: "",
  loading: false,
  error: "",
};

const fetchAllcategories = createSlice({
  name: "fetchAllcategories",
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addCase(
      fetchCategories.fulfilled,
      (state, action: PayloadAction) => {
        state.categories = action.payload;
      }
    );
  },
});

export default fetchAllcategories.reducer;


