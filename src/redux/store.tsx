import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import signinSlice from "./reducers/signinSlice";
import signUpSlice from "./reducers/signUpSlice";
import fetchAllblogs from "./reducers/fetchAllblogs";
import fetchAllcategories from "./fetchAllcategories";

export const store = configureStore({
  reducer: {
    signinSlice: signinSlice,
    signUpSlice:signUpSlice,
    fetchAllblogs:fetchAllblogs,
    fetchAllcategories:fetchAllcategories
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
