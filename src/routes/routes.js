import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Cart from "../Pages/Cart";
import TopRated from "../Pages/TopRated";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      // {
      //   path: "/About",
      //   element: <About></About>,
      // },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/top-rated",
        element: <TopRated></TopRated>,
      },
    ],
  },
]);

export default routes;
