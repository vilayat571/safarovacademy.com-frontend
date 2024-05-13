import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Form } from "../../pages/Signin/Signin";

export interface InitialState {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  data: "",
  loading: false,
  error: "",
};

export const submitSigninForm = createAsyncThunk(
  "/sendForm",
  async (form: Form) => {
    const url = "https://api.safarovacademy.com/api/v1/account/login/";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",

      body: JSON.stringify({
        email: form.email,
        password: form.password,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        localStorage.setItem(
          "signIn",
          JSON.stringify({
            token: result.refresh,
            access: result.access,
            username: result.user_details.username,
            id: result.user_details.id,
          })
        );
      });
  }
);

const signinSlice = createSlice({
  name: "signinSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(submitSigninForm.pending, (state: InitialState) => {
      state.loading = false;
      state.error = null;
    });
  },
});

export default signinSlice.reducer;
