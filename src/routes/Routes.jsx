import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/Error/ErrorPage";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayOut from "../AuthLayout/AuthLayOut";
import SignIn from "../pages/SignIn";
import Register from "../pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        index: true,
        Component: Home,
      },
      {
        path: "coverage",
        Component: Coverage,
        loader: () => fetch("/seviceCenter.json").then((res) => res.json()),
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayOut,
    children: [
      {
        path: "sign-in",
        Component: SignIn,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);
