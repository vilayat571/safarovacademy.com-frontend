import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/Home/App.tsx";
import "./assets/styles/index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Askquestion from "./pages/Askquestion/Askquestion.tsx";
import Blogs from "./pages/Blogs/Blogs.tsx";
import Notfound from "./pages/Notfound/Notfound.tsx";
import Singleblog from "./pages/Singleblog/Singleblog.tsx";
import Signin from "./pages/Signin/Signin.tsx";
import Signup from "./pages/Signup/Signup.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.tsx";
import Admin from "./pages/Admin/Admin.tsx";
import Question from "./components/Admin/Question.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Notfound />,
  },
  {
    path: "/askquestion",
    element: <Askquestion />,
  },
  {
    path: "/askquestion/myquestions",
    element: <Question />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "/blogs/:blogName",
    element: <Singleblog />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: <Admin />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
