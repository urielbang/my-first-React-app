import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Article from "./article";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/article/:slag",
    element: <Article />,
  },
]);

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

root.render(<RouterProvider router={router} />);
