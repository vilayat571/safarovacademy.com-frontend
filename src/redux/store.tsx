import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import signinSlice from "./reducers/signinSlice";
import signUpSlice from "./reducers/signUpSlice";
import fetchAllcategories from "./reducers/fetchAllcategories";
import introBlogsSlice from "./reducers/introBlogsSlice";
import askQuestion from "./reducers/askQuestion";
import fetchBlogs from "./reducers/fetchBlogs";


export const store = configureStore({
  reducer: {
    signinSlice: signinSlice,
    signUpSlice: signUpSlice,
    fetchAllcategories: fetchAllcategories,
    introBlogsSlice: introBlogsSlice,
    askQuestion: askQuestion,
    blogsStoreReducer: fetchBlogs,
   
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
