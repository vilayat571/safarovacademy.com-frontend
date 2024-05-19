import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Form } from "../../pages/Signin/Signin";

export interface InitialState {
  data: any;
  loading: boolean;
  error: any;
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

   const response:any= await fetch(url, {
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

      return response;

  }
);

const signinSlice = createSlice({
  name: "signinSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(submitSigninForm.pending, (state: InitialState) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(submitSigninForm.fulfilled, (state: InitialState,action:PayloadAction) => {
      state.loading = false;
      state.error = null;
      state.data=action.payload
    });
    builder.addCase(submitSigninForm.rejected, (state: InitialState,action) => {
      state.loading = false;
      state.error = action.payload;
      state.data=null;
    });
  },
});

export default signinSlice.reducer;
