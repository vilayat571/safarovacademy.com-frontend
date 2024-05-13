import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FormSignup } from "../../pages/Signup/Signup";

interface InitialState {
  data: any;
  loading: boolean;
  error: any;
}

const initialState: InitialState = {
  data: "",
  loading: false,
  error: "",
};

export const signUpform = createAsyncThunk(
  "/sendSignup",
  async (form: FormSignup) => {
    const url = "https://api.safarovacademy.com/api/v1/account/register/";

    try {
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

      const json = await response.json();
      if (!response.ok) {
        return json
        
    }
    } catch (error) {
      console.log(error);
    }
  }
);

const signUpSlice = createSlice({
  name: "signUpSlice",
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addCase(signUpform.fulfilled, (state, action: PayloadAction) => {
      state.loading = false;
      state.error = action.payload;
      
    });
  },
});

export default signUpSlice.reducer;
// catchh fetch failed olanda xetanı tutur
