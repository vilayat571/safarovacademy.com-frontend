import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/Home/App.tsx";
import "./assets/styles/index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Blogs from "./pages/Blogs/Blogs.tsx";
import Notfound from "./pages/Notfound/Notfound.tsx";
import Singleblog from "./pages/Singleblog/Singleblog.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.tsx";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Notfound />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "/blogs/:blogName",
    element: <Singleblog />,
  },
]);

const helmetContext = {};


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider context={helmetContext} >
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);
