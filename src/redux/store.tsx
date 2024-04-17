import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import signinSlice from "./reducers/signinSlice";
import fetchBlogs from "./reducers/fetchBlogs";
import signUpSlice from "./reducers/signUpSlice";
import fetchAllblogs from "./reducers/fetchAllblogs";

export const store = configureStore({
  reducer: {
    signinSlice: signinSlice,
    fetchBlogs: fetchBlogs,
    signUpSlice:signUpSlice,
    fetchAllblogs:fetchAllblogs
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
