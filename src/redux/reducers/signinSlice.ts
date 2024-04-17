import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
    const url = "http://194.15.52.124:8000/api/v1/account/login/";
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
      .then((result) =>
        localStorage.setItem(
          "signIn",
          JSON.stringify({
            token: result.refresh,
            userId: result.user_details.id,
          })
        )
      );
  }
);

const signinSlice = createSlice({
  name: "signinSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      submitSigninForm.pending,
      (state: InitialState, action: PayloadAction) => {
        state.loading = false;
        state.error = null;
      }
    );
  },
});

export default signinSlice.reducer;
