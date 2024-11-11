import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import fetchAllcategories from "./reducers/fetchAllcategories";
import introBlogsSlice from "./reducers/introBlogsSlice";
import fetchBlogs from "./reducers/fetchBlogs";


export const store = configureStore({
  reducer: {
    fetchAllcategories: fetchAllcategories,
    introBlogsSlice: introBlogsSlice,
    blogsStoreReducer: fetchBlogs,
   
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
