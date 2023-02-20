import React from "react";
import { createBrowserRouter } from "react-router-dom";
import NavbarLayout from "components/layout/navbar-layout";
import HomePage from "pages/front-page";
import SinglePost from "pages/single-post";
import routes from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarLayout />,
    children: [
      {
        path: routes.HomePage,
        element: <HomePage />,
      },
      {
        path: routes.SinglePost.routePath,
        element: <SinglePost />,
      },
    ],
  },
]);

export default router;
