import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AskInterface } from "../../elements/Ask/Formofasking";

interface AskQuestionState {
  data: any;
  loading: boolean;
  error: any;
}

export interface FormData {
  title: any;
  subject: string;
}

const initialState: AskQuestionState = {
  data: "",
  loading: false,
  error: null,
};

export const sendFormData = createAsyncThunk(
  "/sendFormData",
  async (form: AskInterface) => {
    const url = "https://api.safarovacademy.com/api/v1/blog/questions/";

    const headers = {
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem("signIn") || "{}").access
      }`,
      "Content-Type": "application/json",
    };

    const body = JSON.stringify({
      title: form.title,
      subject: form.subject,
    });

    fetch(url, {
      method: "POST",
      credentials: "include",
      headers,
      body,
    });
  }
);

export const askQuestion = createSlice({
  name: "askQuestion",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendFormData.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });
  },
});

export default askQuestion.reducer;
