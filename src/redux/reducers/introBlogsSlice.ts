import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  data: any;
  loading: boolean;
  error: any;
}

const initialState: InitialState = {
  data: "",
  error: "",
  loading: false,
};

export const fetchSomeBlogs = createAsyncThunk("/fetchSomeBlogs", async () => {
  const url = "https://api.safarovacademy.com/api/v1/blog/";
  const data = fetch(url).then((data) => data.json());
  return data;
});

const introBlogsSlice = createSlice({
  name: "introBlogsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSomeBlogs.fulfilled, (state, action: any) => {
      state.data = action.payload;
      state.loading = false;
      state.error = "";
    });
  },
});

export default introBlogsSlice.reducer;
