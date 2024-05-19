import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FormSignup } from "../../pages/Signup/Signup";

interface InitialState {
  data: any;
  loading: boolean;
  error: any;
}

export interface IData {
  form: FormSignup;
  setRes: any;
}

const initialState: InitialState = {
  data: "",
  loading: false,
  error: "",
};

export const signUpform = createAsyncThunk(
  "/sendSignup",
  async ({ form, setRes }: IData) => {
    const url = "https://api.safarovacademy.com/api/v1/account/register/";

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email: form.email,
        username: form.username,
        password: form.password,
      }),
    });

  

    return response.status;
  }

 
);

const signUpSlice = createSlice({
  name: "signUpSlice",
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addCase(signUpform.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    builder.addCase(signUpform.fulfilled, (state, action: PayloadAction) => {
      state.loading = false;
      state.error = null
      state.data=action.payload
    })
    builder.addCase(signUpform.rejected, (state, ) => {
      state.loading = false;
      state.error = null;
      state.data=null
    })
  },
});

export default signUpSlice.reducer;
// catchh fetch failed olanda xetanı tutur
